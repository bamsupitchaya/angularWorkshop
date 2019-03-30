import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngular';
  score: number = 51;
  name: string="นางขอ";
  student = {
    studentID: "5821602912",
    name : "error",
    weight: 100,
    height: 175
}
studentList = [{
  studentID: "5821602912",
    name : "Bammmm",
    weight: 100,
    height: 175
},{
  studentID: "5821609999",
    name : "brownie",
    weight: 75,
    height: 175
}]

constructor(){
  let student;
  //console.log(this.studentList);
  //console.log(studentList);
  //console.log(this.name);
  this.studentList.map((Object,index)=>{
    let obj:any = Object;
    obj.bmi = Object.weight/(Object.height/100*(Object.height/100))
    return obj;
  })
  console.log(this.studentList);
}
}
