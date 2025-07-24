package com.example.service;

import com.example.model.Deportista;
import java.util.List;



public interface DeportistaService {
    
    public Deportista agregarDeportista(Deportista deportista);
    
    public Deportista buscarDeportista(String nombre);
    
    /**
     * Metodo buscarPorId(long id) sin implementar en el controller
     */ 
    public Deportista buscarPorId(long id);
    
    public Deportista actualizar(long id, Deportista deportista);
    
    public String eliminar(long id);
    
}
