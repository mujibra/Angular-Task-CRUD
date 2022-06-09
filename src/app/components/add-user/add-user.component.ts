import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userData } from 'src/app/models/user-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  public loading: boolean = false;
  public user: userData = {} as userData;
  public errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  public createUser() {
    this.userService.addUser(this.user).subscribe(
      (data) => {
        this.router.navigate(['/users']).then();
      },
      (error) => {
        this.errorMessage = error.message;
        this.router.navigate(['/users/add']).then();
      }
    );
  }
}
