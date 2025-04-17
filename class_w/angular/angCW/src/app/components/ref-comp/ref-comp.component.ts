import { Component, Type } from '@angular/core';
import { InputComponent } from 'src/app/components/column/input/input.component';
import { PercantComponent } from 'src/app/components/column/percant/percant.component';
import { AmountComponent } from 'src/app/components/column/amount/amount.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
    selector: 'app-ref-comp',
    imports: [
        NgComponentOutlet
    ],
    templateUrl: './ref-comp.component.html',
    styleUrl: './ref-comp.component.css',
    standalone: true
})
export class RefCompComponent {
    component = InputComponent;

    config: { data: any, component?: Type<any> }[] = [
        {
            data: { value: 1 },
            component: InputComponent
        },
        {
            data: { percent: 1 },
            component: PercantComponent
        },
        {
            data: { amount: 1 },

            component: AmountComponent
        },
        {
            data: 'some text'
        }
    ];
}
