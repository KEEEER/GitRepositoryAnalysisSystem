import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

   public verifySignUpUserAccount(body) {
      const headers = new HttpHeaders({
        'Content-Type': 'text/json'
      });
      const options = {
        headers
      };
      return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/signUp', body, options);
    }
}
