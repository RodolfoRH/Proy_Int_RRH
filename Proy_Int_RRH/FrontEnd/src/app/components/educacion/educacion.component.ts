import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { ServiceEducationService } from 'src/app/service/service-education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Education[] = [];

  constructor(private educationService: ServiceEducationService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educationService.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  deleteEdu(id?: number){
    if(id != undefined){
      this.educationService.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("Fallo al eliminar el registro (Front)");
        }
      )
    }
  }




}
