// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { WebStorageStateStore } from "oidc-client";

export const environment = {
  production: false,
  authConfig: {
    authority: "http://192.168.1.68:10000",
    client_id: "query",
    redirect_uri: "http://localhost:4200/login-callback",
    response_type: "id_token token",
    scope: "openid profile",
    post_logout_redirect_uri: "http://localhost:4200",
    accessTokenExpiringNotificationTime: 4,
    filterProtocolClaims: true,
    silentRequestTimeout: 10000,
    loadUserInfo: true,
    userStore: new WebStorageStateStore({ store: window.localStorage }),
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
