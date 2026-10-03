# Local Firebase configuration

Copy `app/config/firebase.config.example.js` to `app/config/firebase.config.js` and enter the Firebase web-app configuration. The real file is ignored by Git.

Restrict the Google API key in Google Cloud Console to the applications and Firebase APIs this app actually uses. Firebase Database and Storage rules must deny unauthenticated access unless it is explicitly required.
