
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { RegisterPage } from './register/register.page';
import { BloodPage } from './blood/blood.page';


const routes: Routes = [{
  path:'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
},
  {
    path: 'register', component: RegisterPage,
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
 
  {
    path: '',
    redirectTo: 'login', // Redirect to register page by default
    pathMatch: 'full'
  },
  {
    path: 'blood-requests', // Define the path for 'blood-requests'
    component: BloodPage, // Specify the component to be rendered for this route
  },
  {
    path: 'blood',
    loadChildren: () => import('./blood/blood.module').then( m => m.BloodPageModule)
  },
  {
    path: 'matching',
    loadChildren: () => import('./matching/matching.module').then( m => m.MatchingPageModule)
  },
  {
    path: 'dashboard',component:DashboardPage,
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'view-all',
    loadChildren: () => import('./view-all/view-all.module').then( m => m.ViewAllPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'view-requests',
    loadChildren: () => import('./view-requests/view-requests.module').then( m => m.ViewRequestsPageModule)
  },
  {
    path: 'dash',
    loadChildren: () => import('./dash/dash.module').then( m => m.DashPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'requests2',
    loadChildren: () => import('./requests2/requests2.module').then( m => m.Requests2PageModule)
  },
  {
    path: 'matches2',
    loadChildren: () => import('./matches2/matches2.module').then( m => m.Matches2PageModule)
  },
  {
    path: 'education2',
    loadChildren: () => import('./ducation1/education2.module').then( m => m.Education2PageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
