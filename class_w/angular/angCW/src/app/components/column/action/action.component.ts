import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';

@Component({
    selector: 'app-action',
    imports: [
        MatIconButton,
        MatIcon
    ],
    templateUrl: './action.component.html',
    styleUrl: './action.component.css'
})
export class ActionComponent {
    @Input() id!: number;

    constructor(public router:Router) { }

    public onRoute(): void{
        this.router.navigate([AppRoutes.SHOP + '/' + AppRoutes.EDIT_ITEM, this.id]);
    }
}
