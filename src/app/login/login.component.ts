
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { FoodService } from '../food.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
   
  }
  adddata(adduser)
  {
    this.foodservice.insertservice(adduser.value).subscribe();
  }


  namePattern="^[a-z0-9A-Z]{5,20}$";
pwdPattern="^[a-z0-9A-Z]{5,20}$"

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
    pwd?:string;
    }



