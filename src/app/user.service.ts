import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface UserConfig {
  lang: string;
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private config: BehaviorSubject<UserConfig | null>;
  config$: Observable<UserConfig | null>;

  constructor() {
    this.config = new BehaviorSubject(null);

    this.config$ = this.config.asObservable();
  }

  update(config: UserConfig): void {
    this.config.next(config);
  }

  getConfig(): UserConfig | null {
    return this.config.getValue();
  }
}
