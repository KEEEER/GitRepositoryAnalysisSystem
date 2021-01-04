import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteProjectService {

  constructor(private httpClient: HttpClient) { }

  public deleteChosenProject(body) {
        const headers = new HttpHeaders({
          'Content-Type': 'text/json'
        });
        const options = {
          headers
        };
        return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/deleteProject', body, options);
  }
}
