import { ChangeDetectorRef, Component } from '@angular/core';
import { ChildComponent } from 'src/app/changeD/child/child.component';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fe-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent {
  strategy: 'Default' | 'OnPush' = 'Default';

  highlight: boolean = false;

  constructor(private changeDetector: ChangeDetectorRef) {}

  public toggleDS(): void {
    this.strategy = 'OnPush';
    this.changeDetector.detectChanges();
  }

  public updateChildren(): void {
    this.changeDetector.detectChanges();
  }
}
