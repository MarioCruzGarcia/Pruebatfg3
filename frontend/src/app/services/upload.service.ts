import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  url : string = 'https://api.cloudnary.com/v1_1/dknfkonvj/image/upload';

  uploadImage(data : any){
    return this.http.post(this.url, data);
  }
}
