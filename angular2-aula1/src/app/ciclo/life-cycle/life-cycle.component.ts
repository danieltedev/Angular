import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild
 } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  OnDestroy {

    @Input() valorInicial = 10;

    @ViewChild('variavelLocalP') variavelLocalP: HTMLElement;

  constructor() {
    this.log('construtor');
   }

  ngOnInit() {
    this.log('ngOnInit');
    console.log(this.variavelLocalP);
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
    console.log(this.variavelLocalP);
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewCheked() {
    this.log('ngAfterViewCheked');
    console.log(this.variavelLocalP);
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
