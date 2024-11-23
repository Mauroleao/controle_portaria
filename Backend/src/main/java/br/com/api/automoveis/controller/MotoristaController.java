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

@RestController
@CrossOrigin(origins = "*")
public class MotoristaController {

    @Autowired
    private MotoristaServico ms;

    @DeleteMapping("/motorista/remover/{codigo}")
    public ResponseEntity<RespostaModel> remover(@PathVariable long codigo) {
        return ms.remover(codigo);
    }

    @PutMapping("/motorista/alterar")
    public ResponseEntity<?> alterar(@RequestBody Motorista mt) {
        return ms.cadastrarAlterar(mt, "alterar");
    }

    @PostMapping("/motorista/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Motorista mt) {
        return ms.cadastrarAlterar(mt, "cadastrar");
    }

    @GetMapping("/motorista/listar")
    public Iterable<Motorista> listar() {
        return ms.listar();
    }
}