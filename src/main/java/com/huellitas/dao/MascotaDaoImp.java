package com.huellitas.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.huellitas.modelo.Mascota;

@Repository
@Transactional
public class MascotaDaoImp implements MascotaDao{
  // ATRIBUTOS
  @PersistenceContext
  //Nos va a servir para hacer la conexión con la base de datos
  EntityManager entityManager;

  public List<Mascota> getList() throws Exception {
    String query = "FROM Mascota";
    //Vamos a pasarle al entitiy la consulta y vamos a retornar una lista
    List<Mascota> mascotas = entityManager.createQuery(query).getResultList();
    return mascotas;
  }

  public Mascota readById(int id) throws Exception {
    Mascota mascota = entityManager.find(Mascota.class, id);
    return mascota;
  }

  public String create(Mascota mascota) {
    String message = "";
    try {
      entityManager.persist(mascota);
      message = "Su mascota fue registrada con éxito";
    } catch (Exception e) {
      message = e.getMessage();
    }
    return message;
  }

  public void update(Mascota mascota) throws Exception {
    // Realizar actualización en la BD
    entityManager.merge(mascota);
  }

  public String delete(int id) {
    Mascota mascota = entityManager.find(Mascota.class, id);
    deleteService(mascota);
    return "Mascota borrada del sistema con éxito.";
  }

  public List<String> objToString(List<Mascota> objMascotas) {
    List<String> mascotas = new ArrayList<>();
    for (int i = 0; i < objMascotas.size(); i++) {
      mascotas.add(objMascotas.get(i).toString());
    }
    return mascotas;
  }

  public void deleteService(Mascota mascota) {
    // Eliminar
    entityManager.remove(mascota);
  }
}