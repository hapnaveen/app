import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkingComponent } from './marking/marking.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { MarkedComponent } from './marked/marked.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkingComponent,
    AuthComponent,
    MarkedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
