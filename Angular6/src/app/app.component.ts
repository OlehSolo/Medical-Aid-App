import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6';
  userDetails:any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(

    (res:any) => {
        this.userDetails =res['user'];
      },
      err => {
        console.log(err);

      }
    );
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  manageMembers(){
   this.router.navigateByUrl('/manage');
  }
}

