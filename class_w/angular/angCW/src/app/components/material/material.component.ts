import { Component } from '@angular/core';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-material',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDivider,
    MatFormFieldModule,
    MatInput,
    MatCheckbox
  ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {

  public onRout(url: string): void{
    location.href = 'https://' + url;
  }
}
