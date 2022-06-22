import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router:Router) { }
  cardList:any=[
    {id:1,name:"Balance",amt:0},
    {id:1,name:"Transactions",amt:0},
    {id:1,name:"Support Tickets",amt:0},
    {id:1,name:"Total Bets",amt:0},
    {id:1,name:"Pending Bets",amt:0},
    {id:1,name:"Won Bets",amt:0},
    {id:1,name:"Lose Bets",amt:0},
    {id:1,name:"Refund Bets",amt:0},
  ]

  ngOnInit(): void {
  }
  home(){
    this.router.navigateByUrl("/home")
      }

}
