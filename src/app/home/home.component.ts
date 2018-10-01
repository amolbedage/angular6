import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators} from '@angular/forms';
import {MyserviceService} from '../myservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userdetails:FormGroup;
  constructor(private _formbuilder:FormBuilder, private _myservice:MyserviceService ) {

       this.userdetails=new FormGroup({
            firstname:new FormControl(),
            lastname:new FormControl(),
		    phonenumber:new FormControl(),
		    email:new FormControl(),
		    password:new FormControl(),
			cpassword:new FormControl(),

       });

   }

  ngOnInit() {

    this._myservice.getAllEmpList().subscribe(
        (data)=>{
            console.log(data);
           },error=>{
			 alert();
            console.log(error);
        })
  }

  onsubmit(){

    var res=this.userdetails.value;

    console.log(res);

    this.userdetails = new  FormGroup({
           firstname: new FormControl(res.firstname,[Validators.required]),
           lastname:new FormControl(res.lastname,[Validators.required]),
		   phonenumber:new FormControl(res.phonenumber,[Validators.required]),
		   email : new FormControl(res.email,[Validators.required,Validators.email]),
		   password:new FormControl(res.password,[Validators.required,Validators.minLength(5)]),
		   cpassword:new FormControl(res.cpassword,[Validators.required,Validators.minLength(5)]),	
		   
    });

    if(this.userdetails.valid){
      var body = JSON.stringify(this.userdetails.value);
       this._myservice.saveEmpInfo(body).subscribe(
        (data)=>{
            console.log(data);
           },error=>{
            console.log(error);
        })

    }
    console.log(this.userdetails.valid);
  }
}
