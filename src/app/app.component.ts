import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNum = false;
  useSym = false;
  length = 0;

  onChangeLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    const parsedValue = parseInt(input.value, 10);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      console.log("not a number");
    }
  }
  
  
  changeUseLetters(){
    this.useLetters = !this.useLetters;
  }
  changeUseNum(){
    this.useNum = !this.useNum;
  }
  changeUseSym(){
    this.useSym = !this.useSym
  }
  
  onButtonClick(){
    
   const numbers= '1234567890';
   const letters='abcdefghijqlmnñopqrstuvwxyz';
   const symbols = '!@#$%^&*()'
   let validChars = '';

   if (this.useLetters) {
    validChars += letters;

   }
   if (this.useNum) {
    validChars += numbers;
    
   }
   if (this.useSym) {
    validChars += symbols;
   }
   let generatedPassword ="";
   for (let index = 0; index < this.length; index++) {
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index];
   }
   this.password= generatedPassword;

  }
 
  
}
