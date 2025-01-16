package com.example.api_user.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class Usuario {
    private Long id;
    private String nome;
    private String email;


    public void setId(long l) {
    }

}
