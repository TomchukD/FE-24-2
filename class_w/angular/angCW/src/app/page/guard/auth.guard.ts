import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const loginService = inject(LoginService);
    if (!loginService.isOauth()) {
        router.navigate(['login']);
    }
    return loginService.isOauth();
};
