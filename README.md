##  CRUD with Angular + Data Table and Spring Boot API
This is a CRUD employees with Angular + Data Table and Spring Boot API
[here](https://www.youtube.com/watch?v=PNngOjoHvzQ&ab_channel=TechnoTownTechie)

## IMPLEMENT
Implemented in Visual Code

Front-end:
- Angular
- Data Table

Back-end:
- Spring Boot
- MySQL

## How to run the Project
- Run a Angular
- Run a Spring Boot

## Install
Boot strap installation:
npm install jquery --save
npm install ngx-bootstrap bootstrap --save

Add the below lines code to Angular.json file

 "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css" 
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
-------------------------------------------------------------------------------------------------------------------------------
Angular Data table setup:

npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev

Add the below lines code into Angular.json file

 "node_modules/datatables.net-dt/css/jquery.dataTables.css" 
 "node_modules/datatables.net/js/jquery.dataTables.js"

Add the below lines code into app.modules.ts file
import { DataTablesModule } from 'angular-datatables';

imports: [
    DataTablesModule
  ]
