import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodeBaseService {

  constructor(private httpClient: HttpClient) {}
  // tslint:disable-next-line:typedef
  public getCodeBaseService(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    const options = {
      headers
    };
    return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/commitServlet', body, options);

  }

  public getRepoDataOfProject(body) {
      const headers = new HttpHeaders({
        'Content-Type': 'text/json'
      });
      const options = {
        headers
      };
      return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/getProjectGitRepositories', body, options);
    }


}
