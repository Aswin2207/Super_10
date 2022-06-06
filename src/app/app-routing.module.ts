import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamedetailComponent } from './pages/gamedetail/gamedetail.component';
import { HomeComponent } from './pages/home/home.component';
import { PromotioninfoComponent } from './pages/promotioninfo/promotioninfo.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { ViewallComponent } from './pages/viewall/viewall.component';

const routes: Routes = [{
	path: '',
	component: HomeComponent
}, {
	path: 'viewall',
	component: ViewallComponent
},
{
	path: 'gamedetail',
	component: GamedetailComponent
},
{
	path: 'home',
	component: HomeComponent
},
{
	path: 'promotion',
	component: PromotionsComponent
},
{
	path: 'promotion/promotioninfo',
	component: PromotioninfoComponent
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
