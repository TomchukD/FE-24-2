import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-amount',
    imports: [
        CurrencyPipe
    ],
    templateUrl: './amount.component.html',
    styleUrl: './amount.component.css'
})
export class AmountComponent implements OnInit {
    @Input() data: any;


    ngOnInit(): void {
        console.log(this.data);
    }
}
