import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mathstracted';
  public blurValue;
  constructor(){
    window.addEventListener('scroll', (e)=>{
      this.blurValue = `blur(${Math.min(window.scrollY/25, 15)}px)`;
    })
  }
}
