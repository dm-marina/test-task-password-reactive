import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordFormComponent } from './password-form/password-form.component';
import {ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatInputModule} from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StrengthComponent } from './password-form/strength/strength.component';
import { PasswordInputComponent } from './password-form/password-input/password-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
    StrengthComponent,
    PasswordInputComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
