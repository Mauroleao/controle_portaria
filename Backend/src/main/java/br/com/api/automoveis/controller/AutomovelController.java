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



@RestController
@CrossOrigin(origins = "*")
public class AutomovelController {

    @Autowired
    private Automovelservico as;

    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<RespostaModel> remover(@PathVariable long codigo){
        return as.remover(codigo);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody Automovel am){
        return as.cadastrarAlterar(am, "alterar");
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Automovel am){
        return as.cadastrarAlterar(am, "cadstrar");
    }
    

    @GetMapping("/listar")
    public Iterable<Automovel>listar(){
        return as.listar();
    }



    @GetMapping("/")
    public String rota(){
        return "Api esta funcionando";
    }


    
}
