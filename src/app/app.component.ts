import { Component, OnInit } from '@angular/core';
import { UserConfig, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config: UserConfig | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.config = this.userService.getConfig();
  }
}
