import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../shared/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form !:FormGroup
  newUser:any[]=[]
  constructor(private fb :FormBuilder,private router:Router,private _dataService:DataServiceService ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname :this.fb.control("",Validators.required),
      lastname : this.fb.control("",Validators.required),
      country : this.fb.control("",Validators.required),
      subject:this.fb.control("",Validators.required)
    })
  }

  saveData(){

    if(this.form.valid){

      const userData = this._dataService.getData()!=null ? this._dataService.getData() :[]

      console.log(userData)

      userData.push(this.form.value)
      localStorage.setItem("userData",JSON.stringify(userData))
      this.router.navigate(['list'])
    } else {
      alert("Please Enter details")
    }

  }

}
