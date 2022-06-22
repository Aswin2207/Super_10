import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers: [NgbModalConfig, NgbModal]
})
export class HeaderComponent implements OnInit {
	signInForm:FormGroup

	constructor(config: NgbModalConfig,
		 private modalService: NgbModal,
		  public router:Router,
		  public auth:AuthService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
		this.signInForm = new FormGroup({
			// ValidationCheck.passwordValidator
			username: new FormControl("", [Validators.required]),
		
			password: new FormControl('', [Validators.required, Validators.minLength(8)]),
			
		  });
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
	loginUser(){
		console.log(this.signInForm.value)
		let data={
			"username":"tivyaananth94@gmail.com",
			"password":"7200900047"
		}
		this.auth.login(data).subscribe(res=>{

		}, err=>{
			console.log(err)
		})

	}

}
