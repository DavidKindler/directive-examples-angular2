import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private switch = true;
    private items=[1,2,3,4,5];
    private value = 100;
    private tweet = {
        totalLikes : 10,
        iLike : true
    }
    private post = {
        voteCount:10,
        myVote:0
    }
    onSwitch() {
      this.switch= !this.switch;
    }
    onVote($event){
        console.log ('voted',$event)
        // update server vote count
    }
}
