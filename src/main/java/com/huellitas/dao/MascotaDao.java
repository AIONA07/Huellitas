package com.huellitas.dao;

import java.util.List;

import com.huellitas.modelo.Mascota;

public interface MascotaDao {
    List<Mascota> getList() throws Exception;

    Mascota readById(int id) throws Exception;

    String create(Mascota mascota);

    void update(Mascota mascota) throws Exception;
    
    String delete(int id) ;

    List<String> objToString(List<Mascota> objMascotas);

    void deleteService(Mascota mascota);
}
