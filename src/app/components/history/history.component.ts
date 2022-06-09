import { Component, OnInit } from '@angular/core';
import { history } from 'src/app/models/history';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  public loading: boolean = false;
  public histories: history[] = [];
  public errorMessage: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAlluser();
  }

  public getAlluser() {
    this.loading = true;
    this.userService.getHistories().subscribe(
      (data) => {
        this.histories = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error.message;
        this.loading = false;
      }
    );
  }
}
