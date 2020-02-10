import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  url: string = "http://localhost:8585/imagen";
  imagen;
  constructor(private http: HttpClient) {


  }


  subirImg() {

  }

}
