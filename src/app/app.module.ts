import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LevelIndexComponent } from './pages/levels/index/index.component';
import { LevelEditComponent } from './pages/levels/edit/edit.component';
import { LevelAddComponent } from './pages/levels/add/add.component';
import { MmDatestampPipe } from './pipes/mm-datestamp.pipe';
import { HomeComponent } from './pages/home/home.component';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SetIndexComponent } from './pages/sets/index/index.component';
import { SetShowComponent } from './pages/sets/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelIndexComponent,
    LevelEditComponent,
    LevelAddComponent,
    MmDatestampPipe,
    HomeComponent,
    SetIndexComponent,
    SetShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
