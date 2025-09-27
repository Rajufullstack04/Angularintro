import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// string interpolation.................

Headingname = "Raju Antharala";
 
Fathername = "Suryanarayana";

 getAdress():string{
   return  "kadiri";
 }


 getphoneNumber():number{
  return 9703990371;
 }


// Property Binding...........................
 
emailAdress =  "rajupower@gmail.com"

 inputtype = "checkbox"

//  imagelink ="src/images/img.1"
cortoonlink = "https://www.shutterstock.com/shutterstock/photos/2644655981/display_1500/stock-vector-a-cheerful-cartoon-panda-sits-holding-a-large-red-heart-its-expression-is-joyful-and-the-style-is-2644655981.jpg"

// imagesrc ="ANGULARINTRO/src/images/img.1"

imagesrc ="c:\Users\rajup\OneDrive\Pictures\linked in .png"

// event bindinng.............................................




}












