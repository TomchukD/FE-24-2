import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { SliceCateguryPipe } from 'src/app/components/shared/pipe/slice-categury.pipe';

@Component({
  selector: 'fe-dump',
  imports: [ SliceCateguryPipe],
  templateUrl: './dump.component.html',
  styleUrl: './dump.component.scss'
})
export class DumpComponent {
  @Input() data: any;
  @Output() update = new EventEmitter<string>();
}
