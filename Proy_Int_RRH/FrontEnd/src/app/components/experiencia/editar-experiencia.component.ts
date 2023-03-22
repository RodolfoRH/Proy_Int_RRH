import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs';
import { ServiceJobsService } from 'src/app/service/service-jobs.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
    jobs: Jobs = null;

  constructor(private serviceJobs: ServiceJobsService, private activatedRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceJobs.detail(id).subscribe(
      data =>{
        this.jobs = data;
      }, err =>{
        alert("Error al actualizar los datos de la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceJobs.update(id, this.jobs).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al actualizar los datos de la experiencia");
        this.router.navigate(['']);
      }
    )
  }


}
