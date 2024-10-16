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
  Components
  Directives
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

  2. App wide Components / Module based components


  HTML 
  CSS 
  TS 



=====

Concepts
----
  Data Binding 
    * keeping the data in component ts and displaying it in component html 

    1. Interpolation
        TS => HTML 

        {{ }}

    2. Property Binding 
    3. Event Binding 
    4. Two Way Binding 
    
    5. Custom Property Binding 
    6. Custom Event Binding 




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


7 characteristics of SPA
----
  1. Page should NOT refresh [DONE]
  2. URL should be changed (optional).  [DONE]
  3. Browser history should be maintained w/o page refresh [DONE]
  4. Retain header and footer without reloading them again and again [DONE]
  5. Main Section should have contextual updates [DONE]
  6. Active Menu should be set 
  7. Page Title should also be changed (optional)


Modules
---
  