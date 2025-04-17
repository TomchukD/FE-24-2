import { Component, NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-loginC',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
    ],
    templateUrl: './login-c.component.html',
    styleUrl: './login-c.component.css'
})
export class LoginCComponent {
    constructor(private loginService: LoginService, private router: Router) {
    }
    public inSubmin(form: NgForm): void {
        if(!form.valid) {
            return
        }
        this.loginService.setLogin()
        this.router.navigate(['/app/home']);
    }
}
