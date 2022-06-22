import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers: [NgbModalConfig, NgbModal]
})
export class HeaderComponent implements OnInit {
	signInForm:FormGroup;
	loginBool:boolean=true;

	constructor(config: NgbModalConfig,
		 private modalService: NgbModal,
		  public router:Router,
		  public auth:AuthService,private snackBar: MatSnackBar) {
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
		if(localStorage.getItem('token')){
			this.loginBool=false;
		}
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
		// let data={
		// 	"username":"tivyaananth94@gmail.com",
		// 	"password":"7200900047"
		// }
		this.auth.login(this.signInForm.value).subscribe((res:any)=>{
			if(res.code==401 || res.code!=200 ){
			this.snackBar.open(`Please enter Valid data`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'end' });
			}
			else{

			
			this.modalService.dismissAll();
			localStorage.setItem("token","1")
			this.snackBar.open(`successfully login`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'end' });
			this.router.navigateByUrl("/dashboard")
			}
		}, err=>{
			this.modalService.dismissAll();
			this.snackBar.open(`Please enter Valid data`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'end' });
		})

	}
	logout(){
		localStorage.clear();
		this.loginBool=true
	}

}
