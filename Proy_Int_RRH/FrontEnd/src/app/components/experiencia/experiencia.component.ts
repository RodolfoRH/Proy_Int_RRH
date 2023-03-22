import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/model/jobs';
import { ServiceJobsService } from 'src/app/service/service-jobs.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  varExp: Jobs[] = [];

  constructor(private ServiceJobs: ServiceJobsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
        }else{
          this.isLogged = false;
        }
  }

  //Borrar Experiencia laboral
deleteJob(id?: number){
  if(id != undefined){
    this.ServiceJobs.delete(id).subscribe(
      data =>{
        this.cargarExperiencia();
      }, err =>{
        alert("Error al eliminar la experiencia seleccionada");
      }
    )
  }
}




//Método para cargar una nueva experiencia laboral en el componente "Experiencia"
  cargarExperiencia(): void{
    this.ServiceJobs.lista().subscribe(data => {this.varExp = data; })
  }




}
