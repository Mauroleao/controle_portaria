package br.com.api.automoveis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.automoveis.model.Motorista;
import br.com.api.automoveis.model.RespostaModel;
import br.com.api.automoveis.repository.MotoristaRepository;

@Service
public class MotoristaServico {

    @Autowired
    private MotoristaRepository mr;

    @Autowired
    private RespostaModel rm;

    /**
     * Lista todos os motoristas cadastrados.
     *
     * @return Vai retornar todos oc motoristas que já estão cadastrados
     */
    public Iterable<Motorista> listar() {
        return mr.findAll();
    }

    /**
     * Cadastra ou altera um motorista.
     *
     * @param mt   Objeto que cadastra ou altera os motoristas.
     * @param acao Aqui vai ser escolhida se vai alterar ou cadastrar.
     * @return Retorna com o resultado da operação.
     */
    public ResponseEntity<?> cadastrarAlterar(Motorista mt, String acao) {
        if (mt.getNome().equals("")) {
            rm.setMensagem("O nome é obrigatório");
            return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
        } else if (mt.getCnh().equals("")) {
            rm.setMensagem("A CNH é obrigatória");
            return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<Motorista>(mr.save(mt), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<Motorista>(mr.save(mt), HttpStatus.OK);
            }
        }
    }

    /**
     * Remove um motorista pelo código.
     *
     * @param codigo Código do motorista a ser removido.
     * @return retorna com a mensagem de sucesso.
     */
    public ResponseEntity<RespostaModel> remover(long codigo) {
        mr.deleteById(codigo);
        rm.setMensagem("O motorista foi removido com sucesso!");
        return new ResponseEntity<RespostaModel>(rm, HttpStatus.OK);
    }
}