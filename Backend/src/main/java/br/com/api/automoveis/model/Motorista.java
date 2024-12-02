package br.com.api.automoveis.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "motoristas")
@Getter
@Setter
public class Motorista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cnh;

    @OneToMany(mappedBy = "motorista") // falta implementar o relacionamento para que haja apenas um motorista por carro.
    @JsonBackReference
    private List<Automovel> automoveis;
}