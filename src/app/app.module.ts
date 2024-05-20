import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PatientsComponent } from "./patients/patients.component";
import { BaseComponentComponent } from "./base-component/base-component.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
@NgModule({
    declarations:[
        PatientsComponent,
        BaseComponentComponent
    ],
    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSidenavModule,
        HttpClientModule,
        HttpClient,
        MatTableModule
    ],
    providers: [HttpClientModule, HttpClient],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class AppModule { }