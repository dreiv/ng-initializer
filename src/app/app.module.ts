import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { UserService, UserConfig } from './user.service';

export function getUserConfig(userStore: UserService) {
  return (): Promise<UserConfig> =>
    of({ lang: 'en', theme: 'dark' })
      .pipe(
        delay(1600),
        tap((config: UserConfig) => userStore.update(config))
      )
      .toPromise();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [UserService],
      useFactory: getUserConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
