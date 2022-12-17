import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { EmailVarifyComponent } from './components/email-varify/email-varify.component';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { TFileComponent } from './components/t-file/t-file.component';
import { TeacherpageComponent } from './components/teacherpage/teacherpage.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ARFileComponent } from './components/a-r-file/a-r-file.component';
import { StudentpageComponent } from './components/studentpage/studentpage.component';
import { SAssigresultComponent } from './components/s-assigresult/s-assigresult.component';
import { AttendanceFileComponent } from './attendance-file/attendance-file.component';
import { STimetableComponent } from './components/s-timetable/s-timetable.component';
import { SStudentdetailsComponent } from './components/s-studentdetails/s-studentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    EmailVarifyComponent,
    ForgetpassComponent,
    TFileComponent,
    TeacherpageComponent,
    ARFileComponent,
    StudentpageComponent,
    SAssigresultComponent,
    AttendanceFileComponent,
    STimetableComponent,
    SStudentdetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
})
export class AppModule {}
