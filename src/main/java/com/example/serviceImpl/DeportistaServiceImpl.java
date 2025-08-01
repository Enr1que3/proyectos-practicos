package com.example.serviceImpl;

import com.example.model.Deportista;
import com.example.service.DeportistaService;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
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

        listaDeportista.add(deportista);
        return deportista;
        
    }
    
    @Override
    public List<Deportista> listarTodos(){
       return listaDeportista.stream().collect(Collectors.toList());
    }

    @Override
    public Deportista buscarPorId(long id) {
        generarTxt(listaDeportista);
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

        return deportista;
      
    }

    @Override
    public String eliminar(long id) {
        listaDeportista.removeIf(remove -> remove.getIdDeportista() == id);
        return "Deportista con id: " + id + " eliminado correctamente";
    }
    
    
    private String generarTxt(List<Deportista> deportistas){
        
        try(BufferedWriter txt = new BufferedWriter(new FileWriter("deportista.txt"))){
            for(Deportista d : deportistas){
                txt.write(d.getNombre()+"| ");
            }
        }catch(IOException e){
            
        }
        
        return "Se genero el block de notas";
    }

}
