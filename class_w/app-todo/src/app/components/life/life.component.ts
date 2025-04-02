import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { HeaderMenuComponent } from 'src/app/components/header-menu/header-menu.component';




@Component({
  selector: 'fe-life',
  imports: [NgClass, NgStyle, HeaderMenuComponent],
  templateUrl: './life.component.html',
  styleUrl: './life.component.scss'
})
export class LifeComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: any;
  @Input() data2: any;

  @ViewChild(HeaderMenuComponent) headerMenuComponent!: HeaderMenuComponent;

  act = false;
  width = '200px';
  constructor() {
    console.log('constructor: LifeComponent loaded');
    setInterval(() => {
      this.act = !this.act;
      this.width = Math.floor(Math.random() *100)+ 'px';
    }, 1500);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('%c ngOnChanges: LifeComponent loaded', 'background: #222; color: #bada55');
  }

  ngOnInit(): void {
    console.log('ngOnInit: LifeComponent loaded');
  }

  ngDoCheck(): void {
    console.log('%c ngDoCheck: LifeComponent loaded', 'background: #222; color: red');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: LifeComponent loaded');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: LifeComponent loaded');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: LifeComponent loaded');
    setTimeout(()=>{
      this.headerMenuComponent.logDaata = 'HELLO'
    },1500)
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: LifeComponent loaded');
  }

  ngOnDestroy(): void {
    console.log('%c ngOnDestroy: LifeComponent loaded', 'background: red');
  }

}
