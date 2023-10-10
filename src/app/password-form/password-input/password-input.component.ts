import { Component , forwardRef, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>PasswordInputComponent),
    multi:true
  }]
})
export class PasswordInputComponent implements ControlValueAccessor{
  public password:string;
  private onChange;
  constructor(private readonly changeDetector:ChangeDetectorRef){}
  public onInputValueChange(event:Event){
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;
    this.onChange(value);
  }
  public writeValue(value:string): void {
    this.password = value;
    this.changeDetector.detectChanges();
  }
  public registerOnChange(fn:(value:string)=>void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: ()=>void): void {

  }
}
