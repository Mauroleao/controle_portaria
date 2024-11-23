package br.com.api.automoveis.model;

import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "automoveis")
@Getter
@Setter
public class Automovel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String placa;
    private String modelo;
    private String marca;
    private int ano;
    private String cor;

    private LocalTime horaEntrada;
    private LocalTime horaSaida;

    @ManyToOne
    private Motorista motorista;
}