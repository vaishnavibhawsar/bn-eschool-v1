import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceFileComponent } from './attendance-file/attendance-file.component';
import { ARFileComponent } from './components/a-r-file/a-r-file.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmailVarifyComponent } from './components/email-varify/email-varify.component';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SAssigresultComponent } from './components/s-assigresult/s-assigresult.component';
import { SStudentdetailsComponent } from './components/s-studentdetails/s-studentdetails.component';
import { STimetableComponent } from './components/s-timetable/s-timetable.component';
import { StudentpageComponent } from './components/studentpage/studentpage.component';
import { TFileComponent } from './components/t-file/t-file.component';
import { TeacherpageComponent } from './components/teacherpage/teacherpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpass', component: ForgetpassComponent },
  { path: 'email-varify', component: EmailVarifyComponent },
  { path: 't-file', component: TFileComponent },
  { path: 'teacherpage', component: TeacherpageComponent },
  { path: 'a-r-file', component: ARFileComponent },
  { path: 'studentpage', component: StudentpageComponent },
  { path: 's-assigresult', component: SAssigresultComponent },
  { path: 'attendance-file', component: AttendanceFileComponent },
  { path: 's-timetable', component: STimetableComponent },
  { path: 's-studentdetails', component: SStudentdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
