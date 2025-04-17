import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { userReducer } from 'src/app/store/reducer';
import { UserEffect } from 'src/app/store/effect';


const store = { user: userReducer }
export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideStore(store),
        provideHttpClient(),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
        provideEffects([UserEffect])]
};
