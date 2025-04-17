import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login: boolean = false;
  constructor(private router: Router) { }

  public setLogin(): void {
    this.login = true;
  }

  public logout(): void {
    this.login = false;
    this.router.navigate(['login']);
  }

  public isOauth(): boolean {
    return this.login;
  }
}
