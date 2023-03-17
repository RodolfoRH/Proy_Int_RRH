package com.miportfolio.rrh.Controller;

import com.miportfolio.rrh.DTO.dtoJobs;
import com.miportfolio.rrh.Entity.Jobs;
import com.miportfolio.rrh.Security.Controller.Mensaje;
import com.miportfolio.rrh.Service.ServiceJobs;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("explab")
@CrossOrigin(origins = "http://localhost:4200")

public class CJobs {
    @Autowired
    ServiceJobs serviceJobs;
    
        //Traer listado de experiencias (Jobs)
    @GetMapping ("/lista")
    public ResponseEntity<List<Jobs>> list(){
        List<Jobs> list = serviceJobs.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

        //Crear una nueva experiencia laboral (Jobs)
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoJobs dtoNewXP){
        if(StringUtils.isBlank(dtoNewXP.getNombreExp()))
            return new ResponseEntity(new Mensaje("Introducir nombre (obligatorio)"), HttpStatus.BAD_REQUEST);
        if(serviceJobs.existsByNombreExp(dtoNewXP.getNombreExp()))
            return new ResponseEntity(new Mensaje("Esta experiencia laboral ya estaba registrada"), HttpStatus.BAD_REQUEST);

        Jobs jobs = new Jobs(dtoNewXP.getNombreExp(), dtoNewXP.getDescripcionExp());
        serviceJobs.save(jobs);
        return new ResponseEntity(new Mensaje("Nueva experiencia guardada correctamente"), HttpStatus.OK);
    }
    
    
}
