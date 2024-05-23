import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder
  ) { 
    this.loginForm = new FormGroup({
      usuario: new FormControl('',Validators.required),
      clave: new FormControl('',Validators.required)
    });

    
  }

  ngOnInit() {
  }

  validaLogin(){
    console.log("loginForm.value:",this.loginForm.value)

  }

}
