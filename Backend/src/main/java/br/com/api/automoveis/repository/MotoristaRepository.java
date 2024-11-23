package br.com.api.automoveis.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.automoveis.model.Motorista;

@Repository
public interface MotoristaRepository extends CrudRepository<Motorista, Long> {
}
