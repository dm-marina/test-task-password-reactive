import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StrengthService } from 'src/app/strength.service';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit{
  strengthSub:Subscription;
  strength:string;
  constructor(private strengthService:StrengthService){}
  ngOnInit(): void {
    this.strengthSub = this.strengthService.strength.subscribe((strength)=>{
      this.strength = strength
    })
  }
}
