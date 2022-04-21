
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
   
  }
  adddata(adduser)
  {
    this.foodservice.insertservice(adduser.value).subscribe();
  } 
  
 
  namePattern="^[a-z0-9A-Z]{5,20}$";
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pwdPattern="^[a-z0-9A-Z]{5,20}$"
  phonePattern="^((\\+91-?)|0)?[0-9]{10}$";
  isValidFormSubmitted=false;


  user=new User();

  onFormSubmit(form:NgForm){


    this.isValidFormSubmitted=false;

    if(form.invalid){
      return;
    }

    this.isValidFormSubmitted=true;
    form.resetForm();
  }
}
 
  export class User {
    name?:string;  
  emailId?:string;
  pwd?:string;  
  phone?:string; 
    }
  
  
  
