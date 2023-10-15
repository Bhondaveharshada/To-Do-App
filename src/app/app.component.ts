import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask ='';
  todo: string[] = [];
  isEdit:boolean=false;
  currentTaskindex = 0;
  
  

  add(newTask :string){
    if(this.newTask == ''){
      alert("plz enter taskitem");
    }
    
    else{
    this.todo.push(newTask);
    this.newTask = '';
    }
   
  }
  remove(i:number){
    if(this.todo.length ==0){
    alert("no task to remove")
    }
    else{
      this.todo.splice(i);
    }
  }
  edit(i:number){
    this.isEdit = true;
    this.currentTaskindex = i;
    this.newTask = this.todo[i];
  }
  save(){
    this.todo[this.currentTaskindex]= this.newTask;
    this.isEdit = false;
    this.newTask= '';
  }
  cancel(){
    this.isEdit=false;
    this.newTask = '';
  }


}

