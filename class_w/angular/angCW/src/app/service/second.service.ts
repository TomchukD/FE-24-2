import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BaseService } from 'src/app/service/abstract.service';

@Injectable({
    providedIn: 'root'
})
export class SecondService extends BaseService {
    constructor() {
        super();
    }

    public putAll(): Observable<any> {
        return this.http.put(this.baseUrl + '/getAll', {}).pipe(
            catchError(this.handleError)
        );
    }
}
