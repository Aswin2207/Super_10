import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers: [NgbModalConfig, NgbModal]
})
export class HeaderComponent implements OnInit {

	constructor(config: NgbModalConfig, private modalService: NgbModal, public router:Router) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	ngOnInit(): void {
	}

	open(login: any) {
		this.modalService.open(login);
	}

	regopen(register: any) {
		this.modalService.open(register);
	}
	home(){
this.router.navigateByUrl("/home")
	}

}
