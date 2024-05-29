import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private firestoreService: FirestoreService
  ) { 
    this.loginForm = new FormGroup({
      usuario: new FormControl('',Validators.required),
      clave: new FormControl('',Validators.required)
    });

    
  }

  ngOnInit() {
  }

  validaLogin(){
    this.firestoreService.leeUsuario();
  }

}
