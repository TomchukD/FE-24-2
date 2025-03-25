import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Inject } from '@angular/core';

export abstract class BaseService {
    readonly baseUrl = 'http://localhost:8080';
    readonly http = Inject(HttpClient)

    handleError(error: HttpErrorResponse) {
        return throwError(error.status)
    }
}
