import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/public/body/home-page/home-page.component';
import { NavigationBarComponent } from './pages/public/header/navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './pages/public/footer/footer-bar/footer-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
import { CardFormComponent } from './pages/public/body/home-page/card-form/card-form.component';
import { MatOptionModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// Add an icon to the library for convenient access in other components
library.add(faFacebookF, faSquare, faGooglePlusG, faLinkedinIn, faInstagram);

const appRoutes: Routes = [
  {path:'home', component: HomePageComponent}, {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    FooterBarComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    SelectModule,
    MatOptionModule, 
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
