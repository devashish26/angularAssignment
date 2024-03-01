import { Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { AdminLoginComponent } from './MyComponents/admin-login/admin-login.component';
import { UserHomeComponent } from './MyComponents/user-home/user-home.component';
import { AdminHomeComponent } from './MyComponents/admin-home/admin-home.component';
import { authGuard } from './guards/auth-guard.guard';


export const routes: Routes = [
    {'path':"" , component: LoginComponent},
    {'path':"login" , component: LoginComponent},
    {'path':"signup" , component: SignupComponent},
    {'path':"adminlogin" , component: AdminLoginComponent},
    {'path':"userhome" , component: UserHomeComponent },
    {'path':"adminhome" , component: AdminHomeComponent},
];