import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatOption } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

interface form {
    userName: FormControl<string | null>
    selectChoose: FormControl<'1' | '2'>,
    address: FormArray<FormGroup<formsAddress>>
}

interface formsAddress {
    phone: FormControl<string | null>,
    zip: FormControl<number | null>
}

@Component({
    selector: 'app-reg',
    imports: [MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule, MatRadioModule, MatIcon],
    templateUrl: './reg.component.html',
    styleUrl: './reg.component.css'
})
export class RegComponent implements OnInit {
    form = new FormGroup<form>({
        userName: new FormControl('hello', [Validators.required, Validators.minLength(6)]),
        selectChoose: new FormControl('1', { nonNullable: true }),
        address: new FormArray<FormGroup<formsAddress>>([])
    });

    constructor() {
    }

    public get userName(): FormControl<string | null> {
        return this.form.controls.userName;
    }

    public get selectChoose(): FormControl<'1' | '2'> {
        return this.form.controls.selectChoose;
    }

    public get address(): FormArray {
        return this.form.controls.address as FormArray;
    }

    ngOnInit(): void {
        this.form.valueChanges.subscribe(v => {
            console.log(v);
        });
        // this.userName.valueChanges.subscribe(value => {
        //     console.log(value);
        // console.log(this.userName);
        // });
        this.selectChoose.valueChanges.subscribe(value => {
            if (value === '2') {
                this.userName.disable();
            } else {
                this.userName.enable();
            }
        });
    }

    addNewForm(): void{
        const formAddress = new FormGroup<formsAddress>({
            phone: new FormControl(),
            zip: new FormControl()
        })
        this.form.controls.address.push(formAddress)
    }
}
