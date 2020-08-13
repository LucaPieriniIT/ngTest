import { Component, OnInit } from '@angular/core';
import { CallerService } from '../service/caller.service';
import { Router } from '@angular/router';

import { DataRS } from '../model/data.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usersAvailable: User[] = [];
  usersManaged: User[] = [];

  constructor(
    private callerService: CallerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    /**
     * chiedo al service lo stato precedente
     * se è la prima inizializzazione, recupero i dati dal caller
     */
    this.usersAvailable = this.callerService.getUsersAvailable();
    this.usersManaged = this.callerService.getUsersManaged();
    if (this.usersAvailable.length === 0 && this.usersManaged.length === 0) {
      this.callerService.getData().subscribe((rs: DataRS) => {
        console.log(rs);
        this.usersAvailable = rs.data;
      });
    }
  }

  manageUser(user: User): void {
    this.usersManaged.push(user);
    this.usersAvailable = this.usersAvailable.filter(u => u !== user);
  }

  unmanageUser(user: User): void {
    this.usersAvailable.push(user);
    this.usersManaged = this.usersManaged.filter(u => u !== user);
  }

  goToUserDetail(user: User): void {
    this.callerService.saveStatus(this.usersAvailable, this.usersManaged);
    this.router.navigate(['/user', user.id]);
  }

}
