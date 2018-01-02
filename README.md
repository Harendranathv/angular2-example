# Angular 2.x, 4.x + Backand JavaScript SDK
An example of Angular project with Backand Inetgartion and workflow based on
[angular-cli](https://github.com/angular/angular-cli)

# Prerequisites 
1. Install latest nodeJs https://nodejs.org/

2. Install angular CLI. [angular-cli](https://github.com/angular/angular-cli).
```bash
npm install -g angular-cli
```

# Getting started
1. Clone https://github.com/backand/angular2-example
2. Go to project folder and install dependencies:
 ```bash
 npm install
 ```

3. Update Backand configurations in `app.component.ts`
 ```javascript
 this.backand.init({
      appName: 'your app name', 
      signUpToken: 'your signup token', 
      anonymousToken: 'your anonymous token', 
      runSocket: true //optional [true|false]
    });
 ```   
 
3. Launch development server, and open `localhost:4200` in your browser:
 ```bash
 ng serve
 ```
 
# Project structure
```
dist/                        compiled version
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- crud/                  crud component (CRUD operation on your model in Backand.Get items, Post items, Filter items )
|  |- files/                 files component (Upload files to Backand storage)
|  |- login/                 login component (Sign in to Backand using username and password, or with anonymous token.)
|  |- signup/                signup component (Sign up to Backand , Sign up using Facebook/Twitter/Google/GitHub)
|  |- app.component.*        app root component (shell) - Update Backand configuration(appName, signUpToken, anonymousToken, runSocket)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- index.html                html entry point
|- styles.css                global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
```

Generate new component using angular-cli.
```bash
ng generate component my-new-component
```