import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class imageService {

  // url = "http://localhost:8111/"

  constructor(private http: HttpClient) { }
  uploadImageToBackend(data: any) {
    console.log("inside upload image service")
    return this.http.post("http://localhost:8080/file/uploadImage", data, { responseType: 'text' })
  }
}
