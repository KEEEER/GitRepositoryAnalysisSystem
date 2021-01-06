import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetRepoInfoOfChosenProjectService {

  constructor(private httpClient: HttpClient) { }


  getRepoDataOfProject(body) {
      const headers = new HttpHeaders({
        'Content-Type': 'text/json'
      });
      const options = {
        headers
      };
      const r = this.httpClient.post<any>('/GitRepositoryAnalysisSystem/getProjectGitRepositories', body, options);
      return r;
    }
}
