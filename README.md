# VersaClient README

The ElectOS VersaClient is a web app that reads, edits, and saves Election Data.

> ElectOS Versa is analogous to what is typically referred to as the “Election Management System,” or EMS, in traditional commercial voting systems.

-- From the [ElectOS website](https://electos.org/)

For more information about ElectOS Versa, please see [What is “Versa”? on the VersaClient Wiki](https://github.com/TrustTheVote-Project/VersaClient/wiki/What-is-%E2%80%9CVersa%E2%80%9D%3F)

For more on VersaClient, please see the [TrustTheVote-Project/VersaClient Wiki](https://github.com/TrustTheVote-Project/VersaClient/wiki). This wiki includes design documents, screen captures, wireframes, and other important information.

## Technologies Used

VersaClient was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3., part of the [Angular](https://angular.io/) TypeScript application development framework. Angular requires node.js and npm. See **Getting Started**, below, for details.

The VersaClient will connect to the [TrustTheVote-Project/VersaEDM-Backend](https://github.com/TrustTheVote-Project/VersaEDM-Backend) API to save and validate election data.

## Getting Started

To work with this repo, first create a fork and then clone the fork to your development workstation. If you just want to try it out, you can download the code from GitHub as a Zip archive.

Once you have the contents of this repo on your development workstation, you'll need to install some software.

To run and develop VersaClient, you'll need to [install Angular-CLI](https://angular.io/guide/setup-local#install-the-angular-cli). To get started, review the [Angular Local Setup: Prerequisites](https://angular.io/guide/setup-local#prerequisites)

VersaClient requirements include:

* node.js
* npm
* angular-cli

To see if you have the software installed correctly, enter the following commands at your terminal:

```bash
node -v
npm -v
ng --version
```

If these commands don't work, or result in errors or the wrong version numbers, follow the steps in [Angular - Setting up the local environment and workspace](https://angular.io/guide/setup-local#setting-up-the-local-environment-and-workspace) for your specific platform.

If you want to contribute code to VersaClient, you'll want to use karma and protractor. See below for details on testing.

## Working with Angular

The [Angular CLI](https://github.com/angular/angular-cli) includes several important tools used to develop the VersaClient.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding and generating components

The VersaClient app consists of a number of different Angular components, many of which correspond to a class of data in the Election Data file.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build VersaClient

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Testing

The VersaClient repo includes uint and end-to-end tests.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help on Angular

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
