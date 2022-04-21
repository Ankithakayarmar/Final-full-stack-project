import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private foodservice:FoodService) { }
  ngOnInit(): void {
  }
  
  insertdata(insertform)
  {
    this.foodservice.confirmservice(insertform.value).subscribe();
  }

}
