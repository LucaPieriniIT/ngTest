import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { shareReplay, retry, catchError } from 'rxjs/operators';

import { DataRS } from '../model/data.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CallerService {

  private REST_API_SERVER = "https://reqres.in/api/users";

  data$: Observable<DataRS>;

  usersAvailable: User[] = [];
  usersManaged: User[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.data$ = this.httpClient.get<DataRS>(this.REST_API_SERVER).pipe(
      retry(3),
      shareReplay(), // per evitare di implementare la cache manualmente
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getData(): Observable<DataRS> {
    return this.data$;
  }

  saveStatus(usersAvailable: User[], usersManaged: User[]): void {
    this.usersAvailable = usersAvailable;
    this.usersManaged = usersManaged;
  }

  getUsersAvailable(): User[] {
    return this.usersAvailable;
  }

  getUsersManaged(): User[] {
    return this.usersManaged;
  }

}
