import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fe-child',
  imports: [DatePipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() name!: string;
  highlight: boolean = false;
  lastUpdate = new Date()
  constructor(private changeDetector: ChangeDetectorRef) {}

  public triggerChanD(): void {
    this.lastUpdate = new Date();
    this.changeDetector.detectChanges()
  }

  private updateJighlight(): void{
    this.highlight = true;
    setTimeout(()=>(this.highlight = false), 500);
  }

  ngOnInit(): void {
    this.updateJighlight()
  }

}
