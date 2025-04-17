import { Component } from '@angular/core';
import { RefCompComponent } from 'src/app/components/ref-comp/ref-comp.component';

@Component({
  selector: 'app-parent',
  imports: [RefCompComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
