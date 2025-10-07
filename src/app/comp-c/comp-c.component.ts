import { Component, ContentChild, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent {

  // ViewChild   --   what is the type here (string)

  //let                  name: string = "Raju";


  // ViewChild   --   what is the type here (ElementRef)



   @ViewChild('welcome') p1 : ElementRef;
   @ViewChild('hello') s1 : ElementRef;
   @ViewChild('firstname') firstname : ElementRef;
   @ViewChild('secondname') secondname : ElementRef;




   // --------------contentchild--------------------------------------------
   @ContentChild('Number') number :ElementRef;

   
// Wht is the type 
// Element ref

// what kind of type
// object

// what are the members here 
// nativeElement

buttonclick(){
  console.log(this.p1.nativeElement.innerText);
  console.log(this.s1.nativeElement.innerText);


  console.log(this.firstname.nativeElement.value);
  console.log(this.secondname.nativeElement.value);


    console.log(this.number.nativeElement.value);


}
@ViewChild('testTenplate') template1 : TemplateRef<any>;
@ViewChild('containarRef',{read:ViewContainerRef}) containarRef : ViewContainerRef;
// @ViewChild('containarRef') v1 : ViewContainerRef;


btnClickme(){

console.log(this.containarRef);
// console.log(this.v1);
this.containarRef.insert(this.template1.createEmbeddedView({"studentname":"Raju","studentId":"24","studentemail":"yfdydtfyv@email.com","MobailNumber":"284845154"}));


console.log(this.template1);

}


}
