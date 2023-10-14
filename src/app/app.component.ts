import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user='';
  pass='';
  ans='';
  check(){
    if(this.user=='' && this.pass==''){
      this.ans="na";
    }
    
    else if(this.user!='' && this.user=='admin'){
      if(this.pass!='' && this.pass=='admin'){
        this.ans="valid";
      }
    }
    else{
      this.ans='invalid';
    }
    console.log('ans',this.ans);
  }

}