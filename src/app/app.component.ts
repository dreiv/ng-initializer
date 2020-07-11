import { Component } from '@angular/core';
import { UserConfig, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: UserConfig | null;

  constructor(private userService: UserService) {
    this.config = userService.getConfig();
  }
}
