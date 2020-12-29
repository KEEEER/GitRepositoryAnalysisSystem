import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommitTrendService {

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public verifyUserLoginData(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    const options = {
      headers
    };
    return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/userLogin', body, options);
    // 改userLogin
  }

}
