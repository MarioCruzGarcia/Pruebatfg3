import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
    })
    export class ServiceLocator {
    private static _httpClient: HttpClient;
    HttpClient: any;


    static setHttpClient(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    static getHttpClient(): HttpClient {
        if (!this._httpClient) {
        throw new Error('HttpClient not set. Call setHttpClient before using getHttpClient.');
        }
        return this._httpClient;
    }

    login(data: any){
        return this.HttpClient.post('http://127.0.0.1:8000/api/login', data);
    }

}
