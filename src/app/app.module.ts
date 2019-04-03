import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BodyComponent } from './shared/components/body/body.component';
import { CardComponent } from './shared/components/card/card.component';
import { StatusComponent } from './shared/components/status/status.component';
import { ShoppingCartComponent } from './shared/components/shopping-cart/shopping-cart.component';
import { HeaderMinComponent } from './shared/components/header-min/header-min.component';
import { FooterMinComponent } from './shared/components/footer-min/footer-min.component';
import { CheckComponent } from './shared/components/check/check.component';
import { BootJsonService } from './shared/service/boot-json.service';
import {FormsModule} from '@angular/forms';
import { GetDataComponent } from './get-data/get-data.component';
import { Routes, RouterModule} from '@angular/router'

const appRoutes: Routes = [
 { path:'',component: BodyComponent,},
 {path:'status', component:StatusComponent},
 { path:'items',component: BodyComponent,},
 { path:'card',component: CardComponent,},
 { path:'aboutItem',component: CheckComponent,},
 { path:'ShoppingCart',component: ShoppingCartComponent,}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CardComponent,
    StatusComponent,
    ShoppingCartComponent,
    HeaderMinComponent,
    FooterMinComponent,
    CheckComponent,
    GetDataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [BootJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
