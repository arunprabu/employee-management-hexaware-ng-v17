Browser 
----
  HTML Renderer 
  CSS Parser 
  JS Engine

Front End 
----  
  Structural Layer 
    HTML   - is a living standard 

  Presentational Layer
    CSS - is a living standard
  
  Interaction Layer
    JS
      * Implementation of a standard


ECMAScript 
---
  * Standard 
  * rules and grammar for languages
  * Implementations:
      JavaScript, ActionScript, QtScript, Google AppsScript 

  * before June 2015 (till ES5)
      * was not Object Oriented Language
      * we did not have class, extends, import, export   

  * after June 2015 (ES2015)
      * has become Object Oriented Language
      * we have class, extends, import, export   

  Essential ES2015 for Angular Developers
    let [DONE]
    const [DONE]
    variable hoisting [DONE]
    default parameters [DONE]
    template literals [DONE]
    destructuring [DONE]
      * array destructuring
      * object destructuring
    spread operator [DONE]
    rest parameters [DONE]
    arrow functions [DONE]



TypeScript 
---
  * TypeScript => (TSC) => JavaScript => (JS Engine) => output
  * Superset of JavaScript 


  Essential TS for Angular Developers 
    class 
    import, export   


  NodeJS Ecosystem 

  Angular App 
----

Webapps 
-----
  Types of Webapps 
    1. Server Side Rendering Apps 
        * Pages will refresh 
        * old fashioned

        codebase will be mixed (front end + backend)

    2. Client Side Rendering Apps = SPA + RESTful API
        Pages will NOT REFRESH 
        * modern webapps

        App #1: Front End App (Single Page App)   [TO LEARN]
          7 characteristics of SPA
          ----
            1. Page should NOT refresh 
            2. URL should be changed (optional)
            3. Browser history should be maintained w/o page refresh 
            4. Retain header and footer without reloading them again and again 
            5. Main Section should have contextual updates 
            6. Active Menu should be set 
            7. Page Title should also be changed (optional)

          SPA Frameworks / Libraries
          -----------
            #1 React JS (library) 
            #2 VueJS (Framework)
            #3 Angular (Framework)
        

        App #2: Back End App  (RESTful API)


========
  
Types of Languages based on Data Typing 
-----
  1. Statically Typed Languages / Strictly Typed Languages / Strongly Typed Languages
      Examples: Java, C#, TS

      Syntax in Java / C#: 
      -------
        int x = 10;
        x = 100; // valid
        x = true; // error

        String appName = "My App";


  2. Loosely Typed Languages / Dynamically Typed Languages
      Example: JavaScript, Python, PHP

      Syntax in JS:
      -----
        var x = 10;
        x = 100.5; // valid
        x = true; // valid
        x = "Hello World"; // valid
        x = undefined;
        x = null;
        x = {};
        x = [];
        x = function() {
          
        }




Data Types in JS 
--------
  1. Primitive Data Types
      string, number, boolean, null, undefined, symbol (es2015), big int (es2017)

  2. Non-Primitive Data Types / Reference Data Types 
      Object, Array, Function, RegExp



TypeScript 
----
  * created by Microsoft
  * TS = JS + Data Typing 
  * Superset of JS
  * TS    => (TSC)   => JS        => (JS Engine) => output
  * Strongly Typed Language / Statically Typed Language / Strictly Typed Language

  Syntax in TS 
  ----
    1. Explicitly Typed 
        var x: number = 10;  // valid
        x = 3245678; // valid 
        x = true; // error

    2. Implicitly Typed or Type Inference
        var y = 20; // valid 
        y = 200; // valid 
        y = "wow"; // error


    More Examples: 
    ----
      let x: number = 10; 
      let myName: string = "John"; 
      let isLoggedIn: boolean = true; 
      let u: undefined = undefined;
      let n: null = null;

      let random: any;
      random = 10;
      random = "John";
      random = true;
      
      var z; // valid because this is of any type
      z = 10; // valid
      z = true; // valid 

    Arrays 
    ----
      const colorList1: string[] = ["red", "green", "blue"];
      const colorList2: Array<string> = ["red", "green", "blue"];

    Objects
    -----
      // Custom type with interface
      interface ICar {
          make: string,
          model: string,
          fuel?: string // optional property
      }

      const car1: ICar  = {
          make: "BMW",
          model: "X1",
      }

      const car2: ICar= {
          make: "BMW",
          model: "i7",
          fuel: "Electric"
      }

      const car3: ICar = {
          make: "Mercedes BEnz",
          model: "GLC",
          fuel: "Petrol"
      }


      // union type
      let phone: string | number = 23456787; // valid 
      phone = "+91-245367589"; // valid 
      phone = true; // error

      // functions
      function add(a: number, b: number): number {
          return a + b;
      }

      const output: number = add(10, 20);


      // Let's understand class 
      class Car {
        // public variables 
        public make: string = ""; // public variable 
        model: string = ""; // this is also a public variable

        // optional
        constructor() {

        }

        // public method 
        getCarInfo() {

        }
      }

      const myCar1: Car = new Car();

==============


NodeJS Ecosystem
======

  NPM 
  ====
    * Node Package Manager
    * Installs packages from the npm registry
    * Packages are stored in a folder called node_modules
    * npm install <package-name>

    Dependencies
    ---
      1. Project Dependencies
          * packages are needed for the project's functionality to work
          * can be installed in the following ways 
              * npm i dropzone
              * npm install --save dropzone
              * npm install dropzone --save 
              * npm install -S dropzone
              * npm install dropzone -S 
          * you can find them under dependencies in package.json

      2. Development Dependencies
          * Some packages are only needed for development (during development)
          * can be installed in the following ways 
              * npm i sass --save-dev
              * npm install --save-dev sass
              * npm install sass --save-dev 
              * npm install -D sass
              * npm install sass -D
          * you can find them under devDependencies in package.json

      3. Global Dependencies
          * these packages will be installed in your system. not in respective project 
          * can be installed in the following ways
              * npm i -g typescript 
              * npm install  typescript -g
              * npm install typescript --global
==========


Angular
--
  ng new <project-name>
  ng serve   (to start the server)

  Thinking in Angular
    Step 0: Identify the number of components
    Step 1: Identify the component hierarchy




Building Blocks
====
  Components [PARTIALLY COMPLETED]
    html 
    css
    ts 

  Directives [DONE]
  Services
  Modules
  Interface
  Pipes


  Guards 
  Classes
  Interceptors 


Project Structure
=====
  1. Building Block wise Project Structure  [NOT RECOMMENDED]
        src/
          app/
            components/
            directives/
            services/


  2. Feature wise + Building Block wise Project Structure 
      src/
        app/ 
          home/
            components/
            directives/
            services/
          concepts/
          employee-manager/
          about/
          contact/
          shared/
            components/
              header/
              footer/
            directives/
              ...
              ...
              
          ...
          ...
          ...
          ...
      


Components
====
  1. Standalone Components 
      header, footer, menu-list 

  2. App wide Components / Feature Module based components



=====

Concepts
----
  Data Binding 
    * keeping the data in component ts and displaying it in component html 

    1. Interpolation [DONE]
        TS => HTML 

        {{ }}
    
    2. Property Binding [DONE]
        TS => HTML 
        []

    3. Event Binding [DONE]
        TS <== HTML 
        ()

    4. Two Way Binding [DONE]
        TS <==> HTML
        [(ngModel)]
        Note: implement this in form fields
    
    5. Custom Property Binding [DONE]
    6. Custom Event Binding [DONE]

  REST API Call 
  LifeCycle hooks 
  RxJS/Observables 



Cross Component Communication
============
  1. Parent to Child Component Communication [DONE]
      using Custom Property Binding 

  2. Child to Parent Component Communication [DONE]
      2.1 using Custom Event Binding with @Output()
          * child component sending to parent component 

      2.2 using @ViewChild() 
          * parent component accessing data from child 
          Refer: https://github.com/arunprabu/employee-mgmt-ng-oct2022/blob/master/src/app/concepts/components/concepts.component.ts
          
  3. Any to Any Component Communication 
      Using Services, RxJS, Observables, Subscription




Routing 
=-=====
  * to make angular app as SPA

  Step 0: 
    Identify the Menus and the urls 
      Home                        / 
      Concepts                    /concepts
      Employee Manager            /employee-manager
      About                       /about 
      Contact                     /contact

  Step 1: 
    Setup the urls in menu component html 

  Step 2: 
    Let's create the components for menus 
      Home              ng g c home --inline-template --inline-style
      Concepts          ng g c concepts --inline-style
      About             ng g c about --inline-template --inline-style
      Contact           ng g c contact --inline-template --inline-style

  Step 3: 
    Let's configure the routes in app.routes.ts 

  Step 4: 
    Check the app. URL will be stable. but the component won't be loaded 
    Let's fix it in app.component.html 
    add <router-outlet></router-outlet> in between header and footer 

  Step 5: 
  ---
    Check the app. Page will still refresh. Let's fix it.

    in menu list component html -- 
      replace <a href=""> with <a routerLink="">

    Note: if it is standalone component, then import RouterModule under imports section of menu-list.component.ts. Only then routerLink will be recognized
  

7 characteristics of SPA
----
  1. Page should NOT refresh [DONE]
  2. URL should be changed (optional).  [DONE]
  3. Browser history should be maintained w/o page refresh [DONE]
  4. Retain header and footer without reloading them again and again [DONE]
  5. Main Section should have contextual updates [DONE]
  6. Active Menu should be set 
  7. Page Title should also be changed (optional)



Directives
=====
  * special instructions to the DOM

  1. Attribute Directives 
      * Examples: routerLink, routerLinkActive, routerLinkActiveOptions

  2. Structural Directives 
      * impact of these directives will be on structural layer (html)

      2.1 *ngIf [DONE]
      2.2 *ngFor [DONE]
      2.3 ngSwitch [TODO]

  3. Custom Attribute Directives [DONE]
      ng g d colorizer

  4. Custom Structural Directives [TODO]
      Learn more from here: https://v17.angular.io/guide/structural-directives#creating-a-structural-directive




Naming Conventions & Casing 
----
  Casing Types 
  --------
    1. PascalCase 
        * Recommended for Object Oriented Program's classes 
        * also Recommended for Interface in TypeScript 

        examples 
        ---
          class CarDetails {

          }

          interface Employee {

          }

    2. camelCase 
        * Recommended for variables, const, functions, methods in JS & TS 
        * Recommended for id's of html elements 
        
        examples 
        -----
          var myCar = 'BMW';
          var isLoggedIn = true;
          var hasValidToken = true;

          function getCarInfo() {
            //....
          }
    
    3. kebab-case
        * Recommended for URLs 
        * Recommended for file names, folder names, assets in front end projects  
        * Recommended for css classes 
        * okay for id's of html elements if your architect says ok

        examples 
        -----
          btn-primary
          slideshow-container 
          youtube-logo.png 

    4. snake_case 
        * never ever use this. 
        * okay for const in JS & TS if architect accepts

        examples
        ---
          const MAX_STUDENTS_PER_CLASS = 30;

----------------
   

Modules
---
  



Employee Manager 
====
  Components 
  Services 
  Interface
  
  RxJS/Observables
  REST API call  


-----
1. List Employees 
    URL: localhost:4200/employees
    component: ng g c employees/components/list-employees --inline-style 
    REST API URL: https://jsonplaceholder.typicode.com/users
    Http method: GET

2. Add Employee 
    URL: localhost:4200/employees/add 
    component: ng g c employees/components/add-employee --inline-style 
    REST API URL: https://jsonplaceholder.typicode.com/users
    Http method: POST

3. Employee Details 
    URL: localhost:4200/employees/1 (or) localhost:4200/employees/3
    component: ng g c employees/components/employee-details --inline-style 
    REST API URL: https://jsonplaceholder.typicode.com/users/1
    Http method: GET

4. Update Employee
    URL: localhost:4200/employees/1 (or) localhost:4200/employees/3
    REST API URL: https://jsonplaceholder.typicode.com/users/1
    Http method: PUT

5. Delete Employee (TODO)
    REST API URL: https://jsonplaceholder.typicode.com/users/1
    Http method: DELETE

