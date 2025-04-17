import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from 'src/app/components/first/child/child.component';



@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
  ],
})
export class FirstModule { }
