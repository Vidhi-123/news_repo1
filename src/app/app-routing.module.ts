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
const routes: Routes = [
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
  {path:'design/:name',component:DesignComponent},
  {path:'interest',component:InterestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
