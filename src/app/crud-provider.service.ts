import { Injectable } from '@angular/core';

interface Student {
  name: string,
  mobile: string,
  email: string,
  address: string
}


@Injectable({
  providedIn: 'root'
})
export class CrudProviderService {
  students : Array<Student> = [];
  constructor() { 
    this.defaultStudent();
  }

  defaultStudent(){
    this.students = [
      {name: "student1", mobile: "9876543211", email: "student1@gmail.com", address: "Pune"},
      {name: "student2", mobile: "9876543216", email: "student2@gmail.com", address: "belgaon"},
      {name: "student3", mobile: "9876543210", email: "student3@gmail.com", address: "Baramati"},
      {name: "student4", mobile: "9876543214", email: "student4@gmail.com", address: "ahemadnagar"},
    ];
  }

  getAllStudents():Array<Student>{
    return this.students;
  }

  saveStudent(student:Student):boolean{
    this.students.push(student);
    return true;
  }

  getStudentById(srNo:number):Student{
    return this.students[srNo];
  }

  deleteStudentById(studntSerialNumber : any):boolean{
    this.students.splice(studntSerialNumber, 1);
    return true;
  }

  updateStudent(srNo:number, student:Student){
    this.students[srNo] = student;
    return true;
  }
}
