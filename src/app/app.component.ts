import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CrudProviderService } from './crud-provider.service';

interface Student {
  name: string,
  mobile: string,
  email: string,
  address: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-with-service';
  students : Array<Student> ;
  studentRegForm : FormGroup;
  selectedStudentId : number;
  updateForm: boolean = false;

  constructor(private crudProvider: CrudProviderService, private formBuilder: FormBuilder){
    this.students =  this.crudProvider.getAllStudents();
    
  }

  ngOnInit() {
    this.studentRegForm = this.formBuilder.group({
      name: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      address: new FormControl()
    })
  }

  registerStudent(){
    console.log(this.studentRegForm.value)
    if(this.crudProvider.saveStudent(this.studentRegForm.value)){
      alert("Student Saved successfully");
    }
    this.resetForm()
  }

  getStudentById(srNo: number){
    this.studentRegForm.setValue(this.crudProvider.getStudentById(srNo));
    this.updateForm = true;
    this.selectedStudentId = srNo;
  }

  updateStudent(){
    if(this.crudProvider.updateStudent(this.selectedStudentId, this.studentRegForm.value)){
      alert("Student updated successfully");
      this.resetForm();
    }
  }

  onSubmit(){

  }

  resetForm(){
    this.studentRegForm.reset();
    this.updateForm = false;
  }

  deleteStudent(srNo:any){
    let deleteStatus = this.crudProvider.deleteStudentById(srNo);
    deleteStatus ? alert("Student Deleted") : alert("Student Delete opearation Failed") ; 
  }
}
