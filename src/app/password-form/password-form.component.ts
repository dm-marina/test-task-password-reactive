import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { StrengthService } from '../strength.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit{
  passwordForm:FormGroup;
  passwordValue:string;
  constructor(private strengthService:StrengthService){}
  ngOnInit(): void {
    this.passwordForm= new FormGroup({
      password: new FormControl(''),
    })
  }
  onSubmit(){}
  onValidatePassword(){
    this.passwordValue = this.passwordForm.get('password').value
    this.strengthService.checkStrength(this.passwordValue)
  }


}
