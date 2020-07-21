import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { BusinessComponent } from "./component/business/business.component";
import { EntertainmentComponent } from "./component/entertainment/entertainment.component";
import { GeneralComponent } from "./component/general/general.component";
import { HealthComponent } from "./component/health/health.component";
import { ScienceComponent } from "./component/science/science.component";
import { SportsComponent } from "./component/sports/sports.component";
import { TechnologyComponent } from "./component/technology/technology.component";
import { WeatherComponent } from "./component/weather/weather.component";
import { GoogleMapComponent } from './component/google-map/google-map.component';
import { DesignComponent } from './component/design/design.component';
import { InterestComponent } from './component/interest/interest.component';
import { AddSourcePageComponent } from './component/add-source-page/add-source-page.component';
import { SourcePageDetailComponent } from './component/source-page-detail/source-page-detail.component';
import { DesignForNewsComponent } from './component/design-for-news/design-for-news.component';
import { CountryComponent } from './component/country/country.component';
import {CountrycatComponent } from './component/countrycat/countrycat.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'post/:itemName' , component: PostComponent},
  {path: 'business' , component: BusinessComponent},
  {path: 'entertainment' , component: EntertainmentComponent},
  {path: 'general' , component: GeneralComponent},
  {path: 'health' , component: HealthComponent},
  {path: 'science' , component: ScienceComponent},
  {path: 'sports' , component: SportsComponent},
  {path: 'technology' , component: TechnologyComponent},
  {path:'weather',component:WeatherComponent},
  {path:'map',component:GoogleMapComponent},
  {path:'design',component:DesignComponent},
  {path:'interest',component:InterestComponent},
  {path:'addsource',component:AddSourcePageComponent},
  {path:'sourcedetail/:name',component:SourcePageDetailComponent},
  {path:'newsdesign',component:DesignForNewsComponent},
  {path:'country/:name',component:CountryComponent},
  {path:'countrycat',component:CountrycatComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
