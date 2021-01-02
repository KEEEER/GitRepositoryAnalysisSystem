import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerifyGitRepoService {

  constructor(private httpClient: HttpClient) { }

   public verifyGitUrlVaild(body) {
        const headers = new HttpHeaders({
          'Content-Type': 'text/json'
        });
        const options = {
          headers
        };
        return this.httpClient.post<any>('/GitRepositoryAnalysisSystem/verifyUrl', body, options);
   }


}
