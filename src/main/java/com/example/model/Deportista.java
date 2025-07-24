package com.example.model;


public class Deportista {
    
    private int idDeportista;
    private String nombre;
    private String Ap;
    private String Am;
    private String especialidad;

    public Deportista(int idDeportista, String nombre, String Ap, String Am,String especialidad) {
        this.idDeportista = idDeportista;
        this.nombre = nombre;
        this.Ap = Ap;
        this.Am = Am;
        this.especialidad=especialidad;
    }
    
    
    

    public long getIdDeportista() {
        return idDeportista;
    }

    public void setIdDeportista(int idDeportista) {
        this.idDeportista = idDeportista;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getAp() {
        return Ap;
    }

    public void setAp(String Ap) {
        this.Ap = Ap;
    }

    public String getAm() {
        return Am;
    }

    public void setAm(String Am) {
        this.Am = Am;
    }

    public String getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }
    
    
    
}
