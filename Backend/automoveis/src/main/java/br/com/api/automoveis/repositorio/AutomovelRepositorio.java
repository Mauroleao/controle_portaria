package br.com.api.automoveis.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.automoveis.modelo.AutomovelModelo;

@Repository
public interface AutomovelRepositorio extends CrudRepository<AutomovelModelo, Long> {
    
}
