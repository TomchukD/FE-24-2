import { Component } from '@angular/core';
import { ParentComponent } from 'src/app/changeD/parent/parent.component';

@Component({
  selector: 'fe-root',
  imports: [ParentComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  public forceUpdate(): void {}
}
