import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar,  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.page.html',
  styleUrls: ['./sent.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton ,IonContent, IonHeader, IonTitle, IonToolbar,  CommonModule, FormsModule]
})
export class SentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
