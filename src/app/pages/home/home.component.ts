import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GameapiService } from 'src/app/services/gameapi.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	tabindex:number=-1;
	constructor(public router:Router,private auth:AuthService,private game:GameapiService) { }

	ngOnInit(): void {
		console.log('hai')
		// this.auth.get().subscribe(res=>{

		// });
	}


	slides = [
		{ img: "https://staging.slotegrator.com/api/index.php/image/get?hash=e88a563aed2cc6ddbfc263587def1d6d0e0eb145.png" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/05/spinomenalseries-mob.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/05/weekendhunt-mob.jpg" },
		{ img: "https://db.sterlingcdn.com/wp-content/uploads/sites/5/2022/05/xxxtreme-mobile.jpg" }
	];

	gameSlides = [
		{ img: "https://staging.slotegrator.com/api/index.php/image/get?hash=e88a563aed2cc6ddbfc263587def1d6d0e0eb145.png"},
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
  gameInit(i:any){
  if(i==0){
    this.game.getGameLobby().subscribe((res:any)=>{
    // console.log(res.lobby[0])
	if(res){
		this.game.fetchGameUrl(res.lobby[0].lobbyData).subscribe(data=>{
			console.log(data)
		})
	}
	});

  }
  }

}
