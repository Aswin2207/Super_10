import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	tabindex:number=-1;
	constructor(public router:Router) { }

	ngOnInit(): void {
	}


	slides = [
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2016/01/DB-Mobile-WB.png" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/05/spinomenalseries-mob.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/05/weekendhunt-mob.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/05/xxxtreme-mobile.jpg" }
	];

	gameSlides = [
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/01/zeusthumb.png"},
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2020/04/TopCard-Thumb.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2020/11/DragonPearls.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/05/BookdelSolThumb.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/05/WaterBloxGigabloxThumb.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/04/Lucky-Pot.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2021/11/LightningBJ-Live-Thumb.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2020/11/Hippodrome.jpg" }
	];
	slideConfig = {
		"slidesToShow": 1,
		"slidesToScroll": 1,
		"centerMode": true,
		"centerPadding": '80px',
		 "variableWidth": true,
		'responsive': [
			{
				'breakpoint': 1024,
				'settings': {
					'slidesToShow': 2
				}
			},
			{
				'breakpoint': 600,
				'settings': {
					'slidesToShow': 2,
					"centerMode": false,

				}
			},
			{
				'breakpoint': 480,
				'settings': {
					'slidesToShow': 1,
					"centerMode": false,

				}
			}
		]
	};

	slideGamesConfig = {
		"slidesToShow": 6,
		"slidesToScroll": 1,
		"centerMode": false,
		'responsive': [
			{
				'breakpoint': 1024,
				'settings': {
					'slidesToShow': 3
				}
			},
			{
				'breakpoint': 600,
				'settings': {
					'slidesToShow': 2
				}
			},
			{
				'breakpoint': 480,
				'settings': {
					'slidesToShow': 1
				}
			}
		]
	};

	addSlide() {
		this.slides.push({ img: "http://placehold.it/350x150/777777" })
	}

	removeSlide() {
		this.slides.length = this.slides.length - 1;
	}

	slickInit() {
		console.log('slick initialized');
	}

	breakpoint() {
		console.log('breakpoint');
	}

	afterChange() {
		console.log('afterChange');
	}

	beforeChange() {
		console.log('beforeChange');
	}
	viewall(){
this.router.navigateByUrl("/viewall")
	}
	viewallpro(){
		this.router.navigateByUrl("/promotion")
			}
			gameDetail(){
				this.router.navigateByUrl("gamedetail");
			}

}
