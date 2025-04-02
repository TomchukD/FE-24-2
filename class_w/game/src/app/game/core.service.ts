import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
    public playerScore = 0;
    public computerScore = 0;
  constructor() { }
}
