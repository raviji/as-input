import {Directive, HostListener, ElementRef, ViewChild} from '@angular/core';

@Directive({
    selector: 'as-input input'
})
export class InputRefDirective {

    focus = false;
    blur = false;
    constructor(public element: ElementRef) { }

    @HostListener('focus')
    onFocus() {
        this.focus = true;
        this.blur = false;
    }

    @HostListener('blur')
    onBlur() {
        this.blur = true;
        this.focus = false;
    }

}
