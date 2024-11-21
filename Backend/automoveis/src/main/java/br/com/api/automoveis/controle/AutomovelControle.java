package br.com.api.automoveis.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.automoveis.modelo.AutomovelModelo;
import br.com.api.automoveis.modelo.RespostaModelo;
import br.com.api.automoveis.servico.Automovelservico;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@CrossOrigin(origins = "*")
public class AutomovelControle {

    @Autowired
    private Automovelservico as;

    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long codigo){
        return as.remover(codigo);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody AutomovelModelo am){
        return as.cadastrarAlterar(am, "alterar");
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody AutomovelModelo am){
        return as.cadastrarAlterar(am, "cadstrar");
    }
    

    @GetMapping("/listar")
    public Iterable<AutomovelModelo>listar(){
        return as.listar();
    }



    @GetMapping("/")
    public String rota(){
        return "Api esta funcionando";
    }


    
}
