import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './pages/home/home.component';
import { ViewallComponent } from './pages/viewall/viewall.component';
import { GamedetailComponent } from './pages/gamedetail/gamedetail.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { PromotioncardComponent } from './components/promotioncard/promotioncard.component';
import { PromotioninfoComponent } from './pages/promotioninfo/promotioninfo.component';
import { ChatwidgetComponent } from './components/chatwidget/chatwidget.component';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
  HomeComponent,
  ViewallComponent,
  GamedetailComponent,
  PromotionsComponent,
  PromotioncardComponent,
  PromotioninfoComponent,
  ChatwidgetComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		SlickCarouselModule,
		MatInputModule,
		BrowserAnimationsModule,
		MatTabsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
