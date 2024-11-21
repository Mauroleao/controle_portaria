package br.com.api.automoveis.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.automoveis.modelo.AutomovelModelo;
import br.com.api.automoveis.modelo.RespostaModelo;
import br.com.api.automoveis.repositorio.AutomovelRepositorio;

@Service
public class Automovelservico {

    @Autowired
    private AutomovelRepositorio ar;

    @Autowired
    private RespostaModelo rm;


    // Método para listar todos os automóveis
    public Iterable<AutomovelModelo> listar(){
        return ar.findAll();
    }   
    
    
    // Método para Cadastrar ou alterar Automoveis
    public ResponseEntity<?> cadastrarAlterar(AutomovelModelo am, String acao){

        if(am.getModelo().equals("")){
            rm.setMensagem("O Modelo é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if(am.getPlaca().equals("")){
            rm.setMensagem("A Modelo do automóvel é obrigatória");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else{
            if(acao.equals("cadstrar")){
                return new ResponseEntity<AutomovelModelo>(ar.save(am), HttpStatus.CREATED);
            }else{
                return new ResponseEntity<AutomovelModelo>(ar.save(am), HttpStatus.OK);    
            }
        }     
    }


    // Método para remover Automoveis
    public ResponseEntity<RespostaModelo> remover(long codigo){

        ar.deleteById(codigo);

        rm.setMensagem("O Automovel foi removido com sucesso!");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);


    }
}
