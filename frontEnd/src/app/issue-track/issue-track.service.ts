import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IssueTrackService {


  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  public getIssueTrackService(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    const options = {
      headers
    };
    return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/issueWithQuery', body, options);

  }
}
