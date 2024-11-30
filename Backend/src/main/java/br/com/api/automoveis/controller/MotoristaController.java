package br.com.api.automoveis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.automoveis.model.Motorista;
import br.com.api.automoveis.model.RespostaModel;
import br.com.api.automoveis.service.MotoristaServico;


// Mapemanto de rotas da API e seus endpoints
@RestController
@CrossOrigin(origins = "*")
public class MotoristaController {

    @Autowired
    private MotoristaServico ms;

    /**
     * Remove um motorista com base no ID fornecido.
     *
     * @param codigo Código do motorista a ser removido.
     * @return Resposta modelo de remoção.
     */

    @DeleteMapping("/motorista/remover/{codigo}")
    public ResponseEntity<RespostaModel> remover(@PathVariable long codigo) {
        return ms.remover(codigo);
    }

    /**
     * Atualiza os dados de um motorista existente.
     *
     * @param motorista Objeto Motorista com os dados atualizados.
     * @return Retorna com o resultado da operação.
    */

    @PutMapping("/motorista/alterar")
    public ResponseEntity<?> alterar(@RequestBody Motorista mt) {
        return ms.cadastrarAlterar(mt, "alterar");
    }
    /**
     * Cadastra um novo motorista.
     *
     * @param motorista Objeto Motorista a ser cadastrado.
     * @return Retorna com o resultado da operação.
     */

    @PostMapping("/motorista/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Motorista mt) {
        return ms.cadastrarAlterar(mt, "cadastrar");
    }

    /**
     * Lista todos os motoristas cadastrados.
     *
     * @return Retorna com os motoristas existentes no banco.
     */

    @GetMapping("/motorista/listar")
    public Iterable<Motorista> listar() {
        return ms.listar();
    }
}