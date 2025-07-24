package com.example.controller;

import com.example.model.Deportista;
import com.example.service.DeportistaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/v1")
public class DeportistaController {
    
    @Autowired
    private DeportistaService deportistaService;
    

    @GetMapping("/id")
    public ResponseEntity<Deportista> buscarPorId(@RequestParam long id){
        Deportista deportista = deportistaService.buscarPorId(id);
        
        return new ResponseEntity<>(deportista,HttpStatus.OK);
    }
    
    @PostMapping("/guardar")
    public ResponseEntity<Deportista> guardarRegistro(@RequestBody Deportista guardarDeportista){
        Deportista deportista = deportistaService.agregarDeportista(guardarDeportista);
        return new ResponseEntity<>(deportista,HttpStatus.CREATED);
    }
    
    @PutMapping("/modificar-registro/{id}")
    public ResponseEntity<Deportista> modificarRegistro(@PathVariable long id, @RequestBody Deportista guardarDeportista){
        Deportista deportista = deportistaService.actualizar(id, guardarDeportista);
        return  new ResponseEntity<>(deportista,HttpStatus.OK);
        
    }
    
    @DeleteMapping("/eliminar-registro/{id}")
    public ResponseEntity<String> eliminarRegistro(@PathVariable long id){
        String eliminado = deportistaService.eliminar(id);
        return new ResponseEntity<>(eliminado, HttpStatus.OK);
    }
    
}
