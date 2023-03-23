import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { ServiceEducationService } from 'src/app/service/service-education.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEdu: string;
  descripcionEdu: string;

  constructor(private educationService: ServiceEducationService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Education(this.nombreEdu, this.descripcionEdu);
    this.educationService.save(educacion).subscribe(
      data =>{
        alert("El registro se agregó correctamente en Educación (Front)");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al agregar el registro en Educación (Front)");
        this.router.navigate(['']);
      }
    )
  }



}
