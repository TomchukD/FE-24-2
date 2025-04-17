import { Component, Input } from '@angular/core';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-percant',
  imports: [
    PercentPipe
  ],
  templateUrl: './percant.component.html',
  styleUrl: './percant.component.css'
})
export class PercantComponent {
  @Input() data: any;

}
