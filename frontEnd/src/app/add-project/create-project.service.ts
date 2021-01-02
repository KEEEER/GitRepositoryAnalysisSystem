import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  constructor(private httpClient: HttpClient) { }

  public createProject(body) {
          const headers = new HttpHeaders({
            'Content-Type': 'text/json'
          });
          const options = {
            headers
          };
          return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/createProject', body, options);
  }
  public appendRepotoProject(body) {
          const headers = new HttpHeaders({
            'Content-Type': 'text/json'
          });
          const options = {
            headers
          };
          return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/addGitRepository', body, options);
  }

}
