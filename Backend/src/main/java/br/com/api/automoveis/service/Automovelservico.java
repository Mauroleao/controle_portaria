package br.com.api.automoveis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.automoveis.model.Automovel;
import br.com.api.automoveis.model.RespostaModel;
import br.com.api.automoveis.repository.AutomovelRepository;

@Service
public class Automovelservico {

    @Autowired
    private AutomovelRepository ar;

    @Autowired
    private RespostaModel rm;


    // Método para listar todos os automóveis
    public Iterable<Automovel> listar(){
        return ar.findAll();
    }   
    
    
    // Método para Cadastrar ou alterar Automoveis
    public ResponseEntity<?> cadastrarAlterar(Automovel am, String acao){

        if(am.getModelo().equals("")){
            rm.setMensagem("O Modelo é obrigatório");
            return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
        }else if(am.getPlaca().equals("")){
            rm.setMensagem("A Modelo do automóvel é obrigatória");
            return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
        }else{
            if(acao.equals("cadastrar")){
                return new ResponseEntity<Automovel>(ar.save(am), HttpStatus.CREATED);
            }else{
                return new ResponseEntity<Automovel>(ar.save(am), HttpStatus.OK);    
            }
        }     
    }


    // Método para remover Automoveis
    public ResponseEntity<RespostaModel> remover(long codigo){

        ar.deleteById(codigo);

        rm.setMensagem("O Automovel foi removido com sucesso!");
        return new ResponseEntity<RespostaModel>(rm, HttpStatus.OK);


    }
}
