import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggerService {
    count = 0;
    log(): void {
        console.log('[INFO]');
    }
    setCount(): void {
        this.count++;
    }
    getCount(): number {
        return this.count
    }
}
