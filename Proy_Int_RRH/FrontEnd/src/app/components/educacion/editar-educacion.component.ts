import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { ServiceEducationService } from 'src/app/service/service-education.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion: Education = null;

  constructor(
  private educationService: ServiceEducationService,
  private activatedRouter: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.details(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al editar este registro (FRONT-ngOnInit)");
        this.router.navigate(['']);
      }


    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.update(id, this.educacion).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar este registro (FRONT-onUpdate)");
        this.router.navigate(['']);
      }


    )
  }





}
