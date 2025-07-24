package com.example.serviceImpl;

import com.example.model.Deportista;
import com.example.service.DeportistaService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;


@Service
public class DeportistaServiceImpl implements DeportistaService{
    
    List<Deportista> listaDeportista = new ArrayList<>(); 
    
    /**
     * se agregan valores de prueba
     */
    
    public  DeportistaServiceImpl(){
        listaDeportista.add(new Deportista(1,"Paola","Longoria","Ruiz","Raquetbol"));
        listaDeportista.add(new Deportista(2,"Maribel","Domínguez","Perez","Futbol"));
        listaDeportista.add(new Deportista(3,"Eduardo","Nájera","Cruz","Básquetbol"));
        listaDeportista.add(new Deportista(4,"Adrian","Fernandez","Sanchez","Automovilismo"));
        listaDeportista.add(new Deportista(5,"Alejandra","Valencia","Fernandez","Tiro con arco"));
        listaDeportista.add(new Deportista(6,"Lorena","Ochoa","Ramirez","Golf"));
    }

    @Override
    public Deportista agregarDeportista(Deportista deportista) {
        
//        listaDeportista.stream().forEach(nuevo -> {
//            deportista.setNombre(nuevo.getNombre());
//            deportista.setAp(nuevo.getAp());
//            deportista.setAm(nuevo.getAm());
//            deportista.setEspecialidad(nuevo.getEspecialidad());
//        });
//        
//        listaDeportista.stream().forEach(Deportista::getNombre);
    
        listaDeportista.add(deportista);
        return deportista;
        
    }

    @Override
    public Deportista buscarDeportista(String nombre) {
        
        listaDeportista.stream().forEach(Deportista::getNombre);
        return listaDeportista.stream().filter(name -> name.getNombre().equalsIgnoreCase(nombre)).findFirst().orElse(null);
        
    }
    
    /**
     * el metodo buscarPorId(long id) no se implementa en el controller
    */

    @Override
    public Deportista buscarPorId(long id) {
        return listaDeportista.stream().filter(idn -> idn.getIdDeportista() == id).findFirst().orElse(null);
    }

    @Override
    public Deportista actualizar(long id, Deportista deportista) {
        
        listaDeportista.stream().filter(d -> d.getIdDeportista() == id).findFirst().ifPresent(nuevo -> {
            nuevo.setNombre(deportista.getNombre());
            nuevo.setAp(deportista.getAp());
            nuevo.setAm(deportista.getAm());
            nuevo.setEspecialidad(deportista.getEspecialidad());
        });
        
                
                
        
//        listaDeportista.stream().forEach(nuevo -> {
//            if(nuevo.getIdDeportista() == id){
//                deportista.setNombre(nuevo.getNombre());
//                deportista.setAp(nuevo.getAp());
//                deportista.setAm(nuevo.getAm());
//                deportista.setEspecialidad(nuevo.getEspecialidad());
//            }
//        });

//        for(Deportista d : listaDeportista){
//            if(d.getIdDeportista() == id){
//                d.setNombre(deportista.getNombre());
//                d.setAp(deportista.getAp());
//                d.setAm(deportista.getNombre());
//                d.setEspecialidad(deportista.getEspecialidad());
//                return d;
//            }
//        }
        
        return deportista;
      
    }

    @Override
    public String eliminar(long id) {
        listaDeportista.removeIf(remove -> remove.getIdDeportista() == id);
        return "Deportista con id: " + id + " eliminado correctamente";
    }
    
}
