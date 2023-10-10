import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class StrengthService{
    public strength = new BehaviorSubject<string>('default');
    updateStrength(newStrength:string){
        this.strength.next(newStrength)
    }
    checkStrength(password:string){
        let num = /\d{8,}/.test(password);
        let letter = /[a-zA-Z]{8,}/.test(password);
        let symbols = /[!@#$%^&*]{8,}/.test(password);
        let strDigit = /^[a-zA-Z0-9]+$/.test(password);
        let strSymbols = /^[a-zA-Z!@#$%^&*]+$/.test(password);
        let digitSymbols = /^[0-9!@#$%^&*]+$/.test(password);
        let all =  /^[a-zA-Z!@#$%^&*0-9]{8,}/.test(password)
       if(password.length===0) this.strength.next('empty');
       else if(password.length<8) this.strength.next('less');
       else {
        if(num || letter || symbols) this.strength.next('easy');
        else if(strDigit || strSymbols || digitSymbols) this.strength.next('medium');
        else if(all) this.strength.next('strong');
        else this.strength.next( 'easy');
       }
    }
}