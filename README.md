# Ng2CorpUi

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

[![NPM](https://nodei.co/npm/ng2-corp-ui.png?compact=true)](https://nodei.co/npm/ng2-corp-ui)

## What is NG2 Corp UI Project ?

NG2 Corp UI is an angular 2 application which embed several UI components.
These components are used in others ASG Angular applications (like 'Workspace' for exemple).
NG2 Corp UI is like a 'demo' of all possibilities offer by this UI library.

## Which components NG2 Corp UI Project contains ?

For now, 3 components are available :

| Component tag      | What it is ?                                                          |
|--------------------|-----------------------------------------------------------------------|
| ng2-corp-desktop   | It is the background of the workspace                                 |
| ng2-corp-sidebar   | It is the left vertical side bar which contains app icons             |
| ng2-corp-topbar    | It is the top horizontal bar which contains home icon and user menu   |

## Installation
```shell
npm install ng2-corp-ui
```
## Usage

Add `Ng2CorpDesktop`, `Ng2CorpSidebar` and/or `Ng2CorpTopbar` to your app module:

```typescript
import { Ng2CorpDesktopComponent } from './ng2-corp-desktop/ng2-corp-desktop.component';
import { Ng2CorpSidebarComponent } from './ng2-corp-sidebar/ng2-corp-sidebar.component';
import { Ng2CorpTopbarComponent } from './ng2-corp-topbar/ng2-corp-topbar.component';


@NgModule({
  declarations: [Ng2CorpDesktopComponent, Ng2CorpSidebarComponent, Ng2CorpTopbarComponent],
  imports: [BrowserModule, Ng2CorpDesktopComponent, Ng2CorpSidebarComponent, Ng2CorpTopbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

Then you can add the tags in your component template (with correct files url):

```html
<ng2-corp-desktop [backgroundImageUrl]="'http://localhost:4200/assets/images/background1.jpg'"></ng2-corp-desktop>
<ng2-corp-topbar [jsonFileUrl]="'http://localhost:4200/assets/data/topbar.json'"></ng2-corp-topbar>
<ng2-corp-sidebar [jsonFileUrl]="'http://localhost:4200/assets/data/sidebar.json'"></ng2-corp-sidebar>
```

### json file format expected

```json
[
  {
    "menuItems": [      
      {
        "title": "Dashboard",
        "externalLink": "#",
        "iconName": "dashboard",
        "children": [
          {
            "title": "Webtop n°1",
            "routerLink": ["/dashboard", "1"]            
          },
          {
            "title": "Webtop n°2",
            "routerLink": ["/dashboard", "2"]
          }
        ]
      },
      {
        "title": "Store",
        "externalLink": "#",
        "iconName": "store_mall_directory",
        "children": [
          {
            "title": "Administration",
            "externalLink": "/Store/Admin"
          }
        ]
      },      
      {
        "title": "Documentation",
        "externalLink": "/doc.html",
        "iconName": "import_contacts"
      }
    ]
  }
]
```

Also, you have to add some reference into the head tag of your global index.html file :

```html
<!doctype html>
<html>
<head>
  ....
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
</head>
....
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
