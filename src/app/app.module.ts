import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

// import firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { FinanceComponent } from './finance/finance.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { LeaveComponent } from './leave/leave.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { SettingsComponent } from './settings/settings.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NotesComponent } from './notes/notes.component';
import { MessagesComponent } from './messages/messages.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    ResetPasswordComponent,
    DashboardComponent,
    ProjectsComponent,
    EventsComponent,
    FinanceComponent,
    TeamMembersComponent,
    LeaveComponent,
    AnnouncementsComponent,
    HelpSupportComponent,
    SettingsComponent,
    ClientsComponent,
    HomeComponent,
    TimelineComponent,
    NotesComponent,
    MessagesComponent,
    ForgotPasswordComponent,
    TasksComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
