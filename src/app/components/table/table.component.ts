import { Component, OnInit } from '@angular/core';
import { userData } from 'src/app/models/user-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  public loading: boolean = false;
  public users: userData[] = [];
  public errorMessage: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAlluser();
  }

  public getAlluser() {
    this.loading = true;
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error.message;
        this.loading = false;
      }
    );
  }

  public deleteUser(id: string) {
    if (id) {
      this.userService.deleteUser(id).subscribe(
        (data) => {
          this.getAlluser();
        },
        (error) => {
          console.log(error);
          this.errorMessage = error.message;
        }
      );
    }
  }
}
