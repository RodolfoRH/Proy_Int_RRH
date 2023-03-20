import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs';
import { ServiceJobsService } from 'src/app/service/service-jobs.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
nombreExp: string = '';
descripcionExp: string = '';

constructor(private ServiceJobs: ServiceJobsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const varExp = new Jobs(this.nombreExp, this.descripcionExp);
    this.ServiceJobs.save(varExp).subscribe(
      data => {
        alert("Nueva experiencia guardada correctamente");
        this.router.navigate(['']);
      }, err => {
    alert("Error al agregar nueva experiencia laboral");
    this.router.navigate(['']);
  }
  )
  }



}
