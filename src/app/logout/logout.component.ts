import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
  }
  
  insertdata(insertform)
  {
    this.foodservice.addservice(insertform.value).subscribe();
  }

}
