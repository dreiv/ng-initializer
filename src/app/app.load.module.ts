import { NgModule, APP_INITIALIZER } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { UserService, UserConfig } from './user.service';

function initApp() {
  return (): Promise<void> =>
    new Promise((resolve) => {
      console.log('In initApp');
      resolve();
    });
}

function getUserConfig(userStore: UserService) {
  return (): Promise<UserConfig> =>
    of({ lang: 'en', theme: 'dark' })
      .pipe(
        delay(1600),
        tap((config: UserConfig) => {
          console.log('In getUserConfig');
          userStore.update(config);
        })
      )
      .toPromise();
}

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initApp
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [UserService],
      useFactory: getUserConfig
    }
  ]
})
export class AppLoadModule {}
