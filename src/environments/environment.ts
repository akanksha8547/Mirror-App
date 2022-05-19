// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



export const environment = {
  production: false, 
  firebaseConfig: {
    apiKey: "AIzaSyDJvnUqXxUIXY8Zt1GyYr00XqCV-6gDBFw",
    authDomain: "mirror-a1029.firebaseapp.com",
    databaseURL: "https://mirror-a1029-default-rtdb.firebaseio.com",
    projectId: "mirror-a1029",
    storageBucket: "mirror-a1029.appspot.com",
    messagingSenderId: "764053401133",
    appId: "1:764053401133:web:102788caea87b987fc12a4",
    measurementId: "G-8HEB0YFQ2B"
  },

  dialogflow: {
    angularBot:'YOUR_CLIENT_KEY'
  }

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
