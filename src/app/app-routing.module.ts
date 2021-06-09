import { TasksComponent } from './tasks/tasks.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { SettingsComponent } from './settings/settings.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotesComponent } from './notes/notes.component';
import { MessagesComponent } from './messages/messages.component';
import { LeaveComponent } from './leave/leave.component';
import { HomeComponent } from './home/home.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { FinanceComponent } from './finance/finance.component';
import { EventsComponent } from './events/events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'help-support', component: HelpSupportComponent },
  { path: 'home', component: HomeComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'team-members', component: TeamMembersComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'timeline', component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
