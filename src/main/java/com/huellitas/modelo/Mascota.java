package com.huellitas.modelo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
// En caso de tener la clase con un nombre distinto al de la tabla @Table(name = "mascotas")
// no importa masyuculas y minúsculas
@Table(name = "mascotas")
public class Mascota {

  // ATRIBUTOS
  @Id
  private int id;
  // En caso de tener una variable con nombre distinto usar @Column(name="nombre")
  private String nombre_mascota;
  private String nombre_dueno;
  private String apellido_dueno;
  private String especie_mascota;
  private String raza;
  private int edad;
  private String comentarios;

  // CONSTRUCTORES
  public Mascota() {
  }

  public Mascota(String nombre_mascota, String nombre_dueno, String apellido_dueno, String especie_mascota, String raza, int edad, String comentarios) {
    this.nombre_mascota = nombre_mascota;
    this.nombre_dueno = nombre_dueno;
    this.apellido_dueno = apellido_dueno;
    this.especie_mascota = especie_mascota;
    this.raza = raza;
    this.edad = edad;
    this.comentarios = comentarios;
  }

  // CONSULTORES // GETTERS

  public String getNombre_mascota() {
    return nombre_mascota;
  }

  public String getNombre_dueno() {
    return nombre_dueno;
  }

  public String getApellido_dueno() {
    return apellido_dueno;
  }

  public String getEspecie_mascota() {
    return especie_mascota;
  }

  public int getId() {
    return id;
  }

  public String getRaza() {
    return raza;
  }

  public int getEdad() {
    return edad;
  }

  public String getComentarios() {
    return comentarios;
  }

  // Setters o asignadores

  public void setNombre_mascota(String nombre_mascota) {
    this.nombre_mascota = nombre_mascota;
  }

  public void setNombre_dueno(String nombre_dueno) {
    this.nombre_dueno = nombre_dueno;
  }

  public void setApellido_dueno(String apellido_dueno) {
    this.apellido_dueno = apellido_dueno;
  }

  public void setEspecie_mascota(String especie_mascota) {
    this.especie_mascota = especie_mascota;
  }

  public void setRaza(String raza) {
    this.raza = raza;
  }

  public void setEdad(int edad) {
    this.edad = edad;
  }

  public void setComentarios(String comentarios) {
    this.comentarios = comentarios;
  }

}