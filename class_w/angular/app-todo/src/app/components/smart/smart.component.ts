import { Component } from '@angular/core';
import { DumpComponent } from 'src/app/components/dump/dump.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'fe-smart',
  imports: [DumpComponent],
  templateUrl: './smart.component.html',
  standalone: true,
  styleUrl: './smart.component.scss'
})
export class SmartComponent {
  message = 'categoty 1 > categoty 2 > categoty 3';
}
