import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

export interface UserConfig {
  lang: string;
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private config: ReplaySubject<UserConfig>;
  config$: Observable<UserConfig>;

  constructor() {
    this.config = new ReplaySubject(1);

    this.config$ = this.config.asObservable();
  }

  update(config: UserConfig): void {
    this.config.next(config);
  }
}
