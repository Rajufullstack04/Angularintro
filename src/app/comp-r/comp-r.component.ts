import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-r',
  templateUrl: './comp-r.component.html',
  styleUrls: ['./comp-r.component.css']
})
export class CompRComponent {

divcolor = "green";
  fontcolor = "red";

isAdmin = true;



  clickdiv(){
  this.divcolor = "aqua";

  this.fontcolor ="blue"
  }


// string interpolation.................

RoleId = 2;
costmorrole = "Adimin:";

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

cortoonlink = "https://www.shutterstock.com/shutterstock/photos/2644655981/display_1500/stock-vector-a-cheerful-cartoon-panda-sits-holding-a-large-red-heart-its-expression-is-joyful-and-the-style-is-2644655981.jpg"

// imagesrc ="ANGULARINTRO/src/images/img.1"
//  imagesrc ="src/images/img.1"

imagesrc_1="https://avatars.githubusercontent.com/u/225119696?s=400&u=d1bb324a0fecc7bca0d7b33619ae457b4f5e179a&v=4"


// imagesrc ="D:\Angular_repos\angular2\Angularintro\src\images\Closing Remarks ngCo.png"


imagesrc_2 ="src/images/ClosingRemarksngCo.png"


imagesrc_3 ="C:\Users\rajup\OneDrive\Pictures\Closing Remarks ngCo.png"
// event bindinng.............................................

evant1(){
  console.log("Buttun click by Raju.....");
}

evant2(){
    window.alert("This is Raju's alert mag....")
}

evantMouseover(testvalue:string){
  console.log(testvalue);
}

eventMouseover_2(eventDetailes:MouseEvent){
  console.log(eventDetailes);

  let paragraph = eventDetailes.target as HTMLParagraphElement;
  window.alert(paragraph.innerText);
}

event_3(eventDetailes:any) {
console.log(eventDetailes);
  }

event_4(eventDetailes:KeyboardEvent){
  console.log(eventDetailes);

  let input = eventDetailes.target as HTMLInputElement;
  console.log(input.value);


}

eventngchange($event:any){
  console.log($event);
this.costmorrole =$event;

}
eventngStyle(){
  

}


colorType = "brown";

EmpolyeType = "Good";

Myname = "Raji";

 
// ------------------------------------------------

AboutMe(event1:any,event2:any){
console.log(event1);
console.log(event2);


}


SudentDetailes = [ "raju" ,"ravi","venky","adarsh"];

// ------------------array of object---------------

Studentname=[
  {id:29,name:"raju"},
  {id:30,name:"ravi"},
  {id:31,name:"venky"},
  {id:32,name:"ramu"},
  {id:33,name:"adarsh"}

];

StudentID= 5;




}









































