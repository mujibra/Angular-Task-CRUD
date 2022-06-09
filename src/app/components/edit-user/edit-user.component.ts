import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userData } from 'src/app/models/user-data';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  public loading: boolean = false;
  public id: string | null = null;
  public user: userData = {} as userData;
  public errorMessage: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    if (this.id) {
      this.loading = true;
      this.userService.getUserById(this.id).subscribe(
        (data) => {
          this.user = data;
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error.message;
          this.loading = false;
        }
      );
    }
  }

  public editUser() {
    if (this.id) {
      this.userService.updateUser(this.user, this.id).subscribe(
        (data) => {
          this.router.navigate(['/users']).then();
        },
        (error) => {
          console.log(error);
          this.errorMessage = error.message;
          this.router.navigate([`/users/edit/${this.id}`]).then();
        }
      );
    }
  }
}
