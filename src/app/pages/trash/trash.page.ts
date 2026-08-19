import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButtons,IonMenuButton , IonContent, IonHeader, IonTitle, IonToolbar, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
  standalone: true,
  imports: [IonButtons,IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar,  CommonModule, FormsModule]
})
export class TrashPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
