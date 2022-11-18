package com.miportfolio.rrh.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Long id;
    @NotNull
    @Size(min = 1, max = 20, message = "Controlar la cantidad de caracteres")
    
    private String Nombre;
    @NotNull
    @Size(min = 1, max = 30, message = "Controlar la cantidad de caracteres")
    
    private String Apellido;
    @NotNull
    @Size(min = 1, max = 30, message = "Controlar la cantidad de caracteres")
    
    private String img;

}
