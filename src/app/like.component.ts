import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  template: `
    <i
       class="glyphicon glyphicon-heart" 
       [class.highlighted]="iLike"
       (click)="onClick()"> Like me
    </i>
    <span>{{ totalLikes }}</span>
    `,
  styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        
        .highlighted {
            color: deeppink;
        }   
    `]
})
export class LikeComponent implements OnInit {
  @Input() totalLikes = 0;
  @Input() iLike = false;

  onClick(){
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
  }
  constructor() { }

  ngOnInit() {
  }

}
