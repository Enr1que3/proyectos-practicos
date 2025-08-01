package com.example.configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                title = "Api de Deportistas mexicanos",
                description = "Esta Api devuelve informacion basica sobre los deportistas mexicanos, como nombre completo y diciplina",
                termsOfService = "www.aqui_va_una_URL_de_los_terminos_y_condiciones.com/terminos-y-condiciones",
                version = "1.0.0",
                contact = @Contact(
                       name = "enrique cuamatzi",
                        // pendiente url = "www.get_here_the_license.com.us/contact"
                        email = "maquinaDeFuego@gmail.com-mx"// correro invalido
                ),
                license = @License(
                        name = "this software cannot be distributed",
                        url = "www.get_here_the_license.com.us/license"
                        // identifier = "123,456,789,0"
                )   
        ),
        //se trabaja con servidores en caso de tener uno
        servers = {
            @Server(
                    description = "dev server",
                    url = "http://localhost:8080"
            ),
            @Server(
                    description = "prod server",
                    url = "http://server-in-production:8080"
            )
        }
)
public class SwaggerConfiguration {}
