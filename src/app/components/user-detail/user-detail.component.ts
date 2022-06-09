import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userData } from 'src/app/models/user-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  public loading: boolean = false;
  public id: string | null = null;
  public user: userData = {} as userData;
  public errorMessage: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
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

  public isNotEmpty() {
    return Object.keys(this.user).length > 0;
  }
}
