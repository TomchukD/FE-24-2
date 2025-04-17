import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { BaseService } from 'src/app/service/abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FirstService  {
    url = 'https://65dcf161e7edadead7ed27ba.mockapi.io/Products'

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<any> {
        return this.http.get(this.url )
    }
}
