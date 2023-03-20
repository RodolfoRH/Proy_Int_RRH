import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../model/jobs';

@Injectable({
  providedIn: 'root'
})
export class ServiceJobsService {
  expURL = 'http://localhost:8080/jobs/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Jobs[]>{
    return this.httpClient.get<Jobs[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Jobs>{
    return this.httpClient.get<Jobs>(this.expURL + `detail/${id}`);
  }

  public save(jobs: Jobs): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', jobs);
  }

  public update(id: number, jobs: Jobs): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, jobs);
  }

public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
}

}
