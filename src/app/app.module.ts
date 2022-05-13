import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB1KGurf-5dlvfZVAvxEVBvx9GqRbEovZI",
      authDomain: "sony1234-d8048.firebaseapp.com",
      projectId: "sony1234-d8048",
      storageBucket: "sony1234-d8048.appspot.com",
      messagingSenderId: "506444267665",
      appId: "1:506444267665:web:a2779e1652477e177ebf30"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
