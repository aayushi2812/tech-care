import { Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { BaseComponentComponent } from './base-component/base-component.component';

export const routes: Routes = [{
    path: '',
    component: AppComponent,
    children: [
        {
            path: '',
            component: BaseComponentComponent,
            children: [
                {
                    path: '',
                    component: PatientsComponent
                }
            ]
        }
    ]
}];
