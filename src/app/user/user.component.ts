import { Component, OnInit } from '@angular/core';
import { CallerService } from '../service/caller.service';
import { ActivatedRoute } from '@angular/router';

import { DataRS } from '../model/data.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  selectedUser: User = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private callerService: CallerService
  ) { }

  ngOnInit(): void {
    let userId = this.getUserIdFromRoute();
    if (userId != null) {
      this.callerService.getData().subscribe((rs: DataRS) => {
        if (rs && rs.data) {
          for (let user of rs.data) {
            if (this.selectedUser == null && user.id == userId) {
              this.selectedUser = user;
            }
          }
        }
      });
    }
  }

  private getUserIdFromRoute(): number | null {
    let userIdFromParams = this.activatedRoute.snapshot.paramMap.get('id');
    if (!userIdFromParams) {
      return null;
    }
    let userId = Number(userIdFromParams);
    if (isNaN(userId)) {
      return null;
    }
    return userId;
  }
}