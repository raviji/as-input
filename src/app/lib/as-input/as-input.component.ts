import { Component, OnInit, ContentChild, HostListener, AfterContentInit, ViewChild, Input, HostBinding, ElementRef } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';
import * as $ from 'jquery';

@Component({
  selector: 'as-input',
  templateUrl: './as-input.component.html',
  styleUrls: ['./as-input.component.scss']
})
export class AsInputComponent implements AfterContentInit {
  @Input() placeholder: string;
  @ContentChild(InputRefDirective, {static: false})
  input: InputRefDirective;
  constructor() {
    // console.log(this.placeholder);
  }

  ngAfterContentInit() {
    // $('.input-focus').find('.input--nao').addClass('input--filled');
    if (!this.input) {
        // console.error('the as-input needs an input inside its content');
    }
}

  @HostBinding('class.input-focus')
  get isInputFocus() {
    if (this.input.element.nativeElement.value.trim() !== '') {
      $(this.input.element.nativeElement).closest('span').addClass('input--filled');
    }
    return this.input ? this.input.focus : false;
  }

  @HostBinding('class.input-blur')
  get isInputBlur() {
    if (this.input.element.nativeElement.value.trim() === '') {
      $(this.input.element.nativeElement).closest('span').removeClass('input--filled');
    }
    return this.input ? this.input.blur : false;
  }

}
