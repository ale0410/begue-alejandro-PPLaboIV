import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url : string = 'https://api.github.com/users/ale0410';
  private url2 : string = 'https://restcountries.com/v3.1/region/europe';
  private url3 : string = 'https://restcountries.com/v3.1/region/Africa';
  
  constructor(public httpClient: HttpClient) { }

  getDatosGit(){
    return this.httpClient.get(this.url);
  }

  getArrayPaisesEurope(){
    return this.httpClient.get(this.url2);
  }

  getArrayPaisesAfrica(){
    return this.httpClient.get(this.url3);
  }
}
