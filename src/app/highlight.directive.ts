import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  // private elementRef: ElementRef;
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.mouseOutColor;
    // this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  @Input() defaultColor = 'green';
  @Input('highlight') highlightColor = 'blue';
  @Input() mouseOutColor = 'orange';

  private backgroundColor:string;

  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  }
  // constructor(private elementRef: ElementRef, private renderer: Renderer) { 
  //   // this.elementRef.nativeElement.style.backgroundColor = 'green';
  //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow')
  // }

}
