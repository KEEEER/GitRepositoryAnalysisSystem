import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProjectInfoService {

  constructor(private httpClient: HttpClient) { }

  public getUserProjectData(body) {
      const headers = new HttpHeaders({
        'Content-Type': 'text/json'
      });
      const options = {
        headers
      };
      return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/getUserProject', body, options);
    }


}
