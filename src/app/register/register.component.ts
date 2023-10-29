import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm! :FormGroup;

  constructor(
    private router:Router, 
    private fb:FormBuilder){}
  
  ngOnInit(): void{
    this.registerForm = this.fb.group({
    phonenumber:this.fb.control('',[Validators.required, Validators.maxLength(10), Validators.minLength(10),Validators.pattern("/^\d{10}/")]),
    firstname:this.fb.control('',[Validators.required, Validators.minLength(3)]),
    email:this.fb.control('',[Validators.required, Validators.email]),
    password:this.fb.control('',[Validators.required,Validators.pattern("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/")]),
    gender:this.fb.control('',[Validators.required])

    })
  }
  register(){
    console.log(this.registerForm)
  }

}
