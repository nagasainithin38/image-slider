import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel';
  images:Array<string>=['https://api.slingacademy.com/public/sample-photos/1.jpeg',
        'https://api.slingacademy.com/public/sample-photos/2.jpeg',
        'https://api.slingacademy.com/public/sample-photos/3.jpeg',
        'https://api.slingacademy.com/public/sample-photos/4.jpeg'
      ]
  index:number=0;

  decrease(){
    this.index-=1
    if (this.index==-1){
      this.index=3;
    }
  }
  increase(){
    this.index+=1
    if (this.index==4){
      this.index=0;
    }
  }
  changeImage(idx:number){
    this.index=idx;
  }
}
