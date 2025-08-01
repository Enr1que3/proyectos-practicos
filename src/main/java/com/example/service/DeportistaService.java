package com.example.service;

import com.example.model.Deportista;
import java.util.List;



public interface DeportistaService {
    
    public List<Deportista> listarTodos();
    
    public Deportista agregarDeportista(Deportista deportista);
    
    public Deportista buscarPorId(long id);
    
    public Deportista actualizar(long id, Deportista deportista);
    
    public String eliminar(long id);
    
}
