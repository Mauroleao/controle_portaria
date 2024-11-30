package br.com.api.automoveis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.automoveis.model.Automovel;
import br.com.api.automoveis.model.RespostaModel;
import br.com.api.automoveis.service.Automovelservico;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


// Mapemanto de rotas da API e seus endpoints
@RestController
@CrossOrigin(origins = "*")
public class AutomovelController {

    @Autowired
    private Automovelservico as;

    /**
     * Remove um motorista com base no ID fornecido.
     *
     * @param codigo Código do motorista a ser removido.
     * @return Resposta modelo de remoção.
     */

    @DeleteMapping("/automovel/remover/{codigo}")
    public ResponseEntity<RespostaModel> remover(@PathVariable long codigo){
        return as.remover(codigo);
    }

    /**
     * Atualiza os dados de um motorista existente.
     *
     * @param automovel Objeto Motorista com os dados atualizados.
     * @return Retorna com o resultado da operação.
    */

    @PutMapping("/automovel/alterar")
    public ResponseEntity<?> alterar(@RequestBody Automovel am){
        return as.cadastrarAlterar(am, "alterar");
    }

    /**
     * Cadastra um novo motorista.
     *
     * @param automovel Objeto Motorista a ser cadastrado.
     * @return Retorna com o resultado da operação.
     */

    @PostMapping("/automovel/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Automovel am){
        return as.cadastrarAlterar(am, "cadstrar");
    }

    /**
     * Lista todos os motoristas cadastrados.
     *
     * @return Retorna com os motoristas existentes no banco.
     */
    

    @GetMapping("/automovel/listar")
    public Iterable<Automovel>listar(){
        return as.listar();
    }


    //endpoint de teste da API
    @GetMapping("/")
    public String rota(){
        return "Api esta funcionando";
    }


    
}
