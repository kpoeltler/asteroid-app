// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     email: {
//         type:String,
//         unique: true
//     },
//     password:String,
    
// });
//     userSchema.pre('save', function(next) {
//     let user = this;

//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();

//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);

//         // hash the password using our new salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);

//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
//     });
// })

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };



// const User = mongoose.model("User", userSchema);

// module.exports = User;


//TESTING======================

// var mongoose = require('mongoose'),
//     User = require('./user');

// var connStr = 'mongodb://localhost:27017/mongoose-bcrypt-test';
// mongoose.connect(connStr, function(err) {
//     if (err) throw err;
//     console.log('Successfully connected to MongoDB');
// });

// // create a user a new user
// var testUser = new User({
//     username: 'jmar777',
//     password: 'Password123'
// });

// // save user to database
// testUser.save(function(err) {
//     if (err) throw err;

//     // fetch user and test password verification
//     User.findOne({ username: 'jmar777' }, function(err, user) {
//         if (err) throw err;

//         // test a matching password
//         user.comparePassword('Password123', function(err, isMatch) {
//             if (err) throw err;
//             console.log('Password123:', isMatch); // -> Password123: true
//         });

//         // test a failing password
//         user.comparePassword('123Password', function(err, isMatch) {
//             if (err) throw err;
//             console.log('123Password:', isMatch); // -> 123Password: false
//         });
//     });
// });








// 1. Create App / Addons / MERN Install & Start / Deployment
// 2. React File Structure
// 3. Components
// 4. Basic variable use
// 5. Props variable use
// 6. Index.js export
// 7. Rendering Data on Page
// 8. input forms - 3/19 pm
// 1. Create App / Addons / MERN Install & Start
//     a. Create
//       $ create-react-app <project name>
//     b. Install Addons: (using Yarn)
//       $ yarn add <addon name>
//       $ yarn install          // will install all addons in package.json
//                               // yarn install at root AND at client level for
//                               // full stack applications.
//     c. Class Addons:
//         $ yarn add axios              // API support
//         $ yarn add react-router-dom   //
//     d. MERN Install & Start:
//         Basic directory:
//          - <Project_name> / Root folder
//             |
//             - server.js
//             - package.json (root)
//             - client/
//                |
//                - package.json (client)
//         Install Commands (for Boilerplate):
//           $ yarn install      // inside root folder
//           $ yarn install      // inside client folder
//           $ yarn start        // inside root
//         if following script exists in root package.json file:
//             "start": "concurrently \"nodemon server.js\" \"npm run client\""
//         - Then client server will begin running as well.
//         - Otherwise cd into client and run 'yarn start'
//     e. Deployment:
//         in root folder, run:
//           $ yarn build      // minifies js code for optimization
//         then push to github/Heroku (before every push)
// --------------------------------------------------------------------------------
// 2. React File Structure
//     - Developer creates component structure, the rest is auto-generated upon creation.
//     - no formal rules, but convention is as follows:
//       - <Project_name>
//         |
//         |- public/  (index/views)
//         |
//         |- src/     (main files)
//            |___ App.js
//            |___ App.css
//            |
//            |- components/ (holds all elements/partials and nested elements)
//               |
//               |-- <ComponentName>/
//                  |___<component_name>.js   (per convention, component names should exactly match the variable name )
//                  |___<component_name>.css
//                  |___index.js              (used to simplify import/export pathway)
//       - note if there are multiple components, enclose them in a folder
//       - components may require sub-components folders and files.
//       - never go deeper in file structure than one sub-component
// --------------------------------------------------------------------------------
// 3. Components
//     a) Stateful components - These track the state/data of the application, highest level of the
//                              component.
//       Smart Component Syntax: (example below imports data/variable from 'TxtPanel' dumb Component)
//         |   import React, {Component} from 'react';    // smart Components require this function
//         |   import TxtPanel from './TxtPanel';         // import component file with child elements
//         |
//         |   state = {
//         |      data:data
//         |    }
//         |
//         |   class App extends Component {       // smart Components require class function inheritance
//         |     render() {                        // required function to render content (smart or dumb)
//         |       return (                        // return required
//         |         <div className="App">         // 'className' vs. 'class' for css selectors
//         |           <TxtPanel />                // this syntax calls lower component functions which returns content
//         |           <TxtPanel />                // multiple rendering allowed, good for templating
//         |         </div>
//         |
//         |       );
//         |     };
//         |   };
//         |
//         |   export default App;
//     b) Dumb Components - contain variables, logic, html, and functions for parent components
//                          but no data/state
//       File Syntax: (dumb component)
//         |   import React from 'react';
//         |
//         |
//         |   const TxtPanel = (props) => (         // *dumb Components are defined as variables, not classes.
//         |     <div>                               // props = params/data passed to component
//         |        <p>Hello  </p>                   //variable usage in brackets
//         |        <p>Hi </p>                       //example of props parameter rendering
//         |        <p>How are you?</p>
//         |
//         |      </div>
//         |
//         |   );
//         |   export default TxtPanel             // allows parent file to access this Component/variable.
//       Alternate Syntax:
//       File Syntax 2:
//         |   import React from 'react';
//         |
//         |   console.log("syntax example")       // *When a component does more than one thing alternate syntax is required
//         |
//         |   const TxtPanel = (props) => {       // *add braces to wrap return code
//         |
//         |     return  (                         // return (<code>)
//         |       <div>
//         |          <p>Hello  </p>
//         |         <p>Hi </p>
//         |         <p>How are you?</p>
//         |       </div>
//         |       );
//         |      };
//         |
//         |      export default TxtPanel          // allows parent file to access this Component/variable.
//   - Components do not track the state/data of the entire "Component tree" function, just their own section
// ---------------------------------------------------------------------------------
// 4. Basic variable use:
//       b) Dumb Component variable render:
//         |   import React from 'react';
//         |
//         |   let name = "anything"                           // variable defined in dumb component
//         |
//         |   const TxtPanel = (props) => (                   // passed in from parent component
//         |     <div>
//         |        <p>Hello {props.name} </p>                       // variable usage in brackets
//         |        <p>Hi {name || "you have no name!"} </p>   // logic allowed in brackets
//         |        <p><span className = How are you?</p>
//         |
//         |      </div>
//         |
//         |   );
//         |   export default TxtPanel
// ---------------------------------------------------------------------------------
// 5. Props variable use: passing variables from a parent file... "props"
//   a. Smart Component defines variable values and passes them to sub-Component
//        (similar to an invocation passing arguments to a function)
//         |   import React, {Component} from 'react';
//         |   import TxtPanel from './TxtPanel';
//         |
//         |   class App extends Component {
//         |     render() {
//         |       return (
//         |         <div className="App">
//         |           <TxtPanel class="bold" name="John">                  // props.class = "bold", props.name = "John"
//         |               Have a great day                                 // props.children = "Have a great day"
//         |           </TxtPanel>
//         |         </div>
//         |       );                                                       //* props.children is a default react variable
//         |     };                                                         // ..name, like props
//         |   };
//         |
//         |   export default App;
//     props = {
//       class:'bold',
//       name:'John',
//       children:'Have a great day'
//       }
//   b. Dumb Component accepts props:
//         |   import React from 'react';
//         |        |
//         |   const TxtPanel = (props) => (
//         |     <div>
//         |        <p className={'other-class-text ${props.bold}'}>    // {} syntax needed when rendering a variable
//         |          Hello {props.name}, {props.children}!             // returns: "Hello John, Have a great day!"
//         |        </p>
//         |
//         |      </div>
//         |
//         |   );
//         |   export default TxtPanel
// ---------------------------------------------------------------------------------
// 6. Index.js export
//     - see "2. File Structure" for folder structure
//     - inside each component folder the "index.js" file will allow simplification of component references by parent file.
//     a. index.js file contains a single line:
//         ____
//         |
//         | export { default } from "./<folder_name>";
//         |
//         |
//         |
//         |
//         |
//         |
//         |___
//     this will export every file in the folder.
//     b. parent component:
//         |   import <Component_Name> from ./Components/<Component_Name_Folder>
//         |
//         |
//     this will PULL every file in the folder.
// ---------------------------------------------------------------------------------
// 7. Rendering Data on Page
//     a. Variable Rendering - React .js files use JSX formatting. Variables are referenced inside brackets.
//       component.js file:
//           |
//           |   <h1>{res.data.property}</h1>
//           |
//           |   <p>{res.data.property}</p>
//           |
//           |   <img src={res.data.property} />
//           |
//     b. Iterated Data - arrays
//         ex: App.js is mapping an array to the FriendsCard.js component.
//         1. App.js
//           |   import React, {Component} from "react";                // import Component library
//           |   import FriendsCard from "./components/FriendsCard";    // Component
//           |   import friends from "./friends.json";                  // Data
//           |
//           |
//           |   class App extends Component {
//           |
//           |     state ={                                             // state has special properties, in this case it will allow
//           |       friends                                            // friends data to add accept keys
//           |     };                                                   // {friends} = {friends: friends}
//           |
//           |     render(){
//           |       return(
//           |         <Wrapper>
//           |           <Title>Friends List</Title>
//           |           {
//           |             this.state.friends.map( elem =>              // refer to this.state data instead of import variable
//           |             <FriendsCard friend={elem} key={elem.id}/>)  // call <FriendsCard /> component on each iteration of data
//           |           }                                              // add key={elem.id} for dynamic rendering
//           |         </Wrapper>                                       // friend={elem}; assigns each array object the "friend" variable for
//           |       )                                                  // component reference
//           |     }
//           |   }
//           |
//           |   export default App;
//         2. FriendsCard.js
//           |    import React from "react";
//           |
//           |    const FriendsCard = (props) => (                       // component acceps stateful data as the "props" object.
//           |      <div className="card">
//           |        <div className="img-container">
//           |
//           |         <img src={props.friend.image} />                 // the props object contains the "friend" data object that was defined and passed
//           |                                                          // down from App.js
//           |        </div>
//           |        <div className="content">
//           |          <ul>
//           |            <li>
//           |              <strong>Name:</strong>{props.friend.name}              // the rest of the friend object properties are defined and iterated
//           |            </li>
//           |            <li>
//           |              <strong>Occupation:</strong> {props.friend.occupation}
//           |            </li>
//           |            <li>
//           |              <strong>Location:</strong> {props.friend.location}
//           |            </li>
//           |          </ul>
//           |        </div>
//           |      </div>
//           |    );
//           |
//           |    export default FriendsCard;
// ---------------------------------------------------------------------------------
// 8. Input forms
//     Common components to copy:
//     a. OnChange function:
//       |   handleInputChange = event => {
//       |      const name = event.target.name;          // you will always need to reference input name
//       |      const value = event.target.value;        // and values
//       |     this.setState({
//       |        [name]: value                          // [name] will pull the input tag's name value,
//       |     });                                      // "value" will be the value of the input
//       |   };
//     b. OnSubmit function:
//       |   state = {
//       |      firstName: "",
//       |     lastName: ""
//       |   };
//       |
//       |   handleFormSubmit = event => {             // User clicks submit with search input
//       |     event.preventDefault();                 // prevents page refresh
//       |     //<validations>
//       |     this.setState({                         //** If OnChange is being used, no need to use setState
//       |       firstName: event.target.firstName
//       |       lastName: event.target.lastName
//       |     });
//       |
//       |     action: <api call / render / etc.>      // perform action.
    //   |
//       |     this.setState({
//       |       firstName: "",                        // clear form for next input after action has been performed.
//       |       lastName: "",
//       |       password: ""
//       |     });
//       |   };
// ---------------------------------------------------------------------------------
// 9. API setup and execution
//     a. folder structure:
//       |--src/
//          |___ App.js
//          |___ App.css
//          |
//          |---components/<parent_component>.js   // will invoke the API.js file funtion.
//         (*)--utils/
//               |
//               |-- API.js                        // sets up (defines) the API request
//     b. API.js:
//         configures the API request that will be generated by the associated parent/smart component
//       |   import axios from "axios";            // API files require axios addon
//       |
//       |   const BASEURL = "https://<api_url>"   // api route
//       |   const APIKEY = "<api_key>"            // api key
//       |
//       |
//       |   export default {                                  // make available to App.js
//       |     search: function(query){                        // seach command
//       |       return axios.get(BASEURL + query + APIKEY);   // concatenate API get route & return results
//       |     },                                              // axios runs get route (& return data?)
//       |     create: function(){
//       |       // define a new function here.                // can write all other API calls as needed
//       |     },
//       |   }
//       |
//     c. <parent_component>.js:
//         Supplies the user input, then invokes the API.js file
//       |   import React, { Component } from "react";
//       |
//       |   import API from "../utils/API";                // import the API.js file and it's API functions
//       |
//       |
//       |   class OmdbContainer extends Component {
//       |
//       |      state = {
//       |        result: {},
//       |        search: ""                               // User search form input to be used for API call
//       |      };
//       |
//       |      handleFormSubmit = event => {              // User clicks submit with search input
//       |       event.preventDefault();
//       |       this.searchMovies(this.state.search);     // invokes searchMovies function below;
//       |      };
//       |
//       |      searchMovies = query => {
//       |         API.search(query)                                   // invokes API call defined and imported from API.js
//       |         .then(res => this.setState({ result: res.data }))   // async, updates 'this.state.results' with API response
//       |         .catch(err => console.log(err));
//       |       };
//       |
//       |
//       |    render(){
//       |       return (
//       |
//       |         // <this.state.results> can be displayed dynamically in user view, or saved, etc.
//       |
//       |         // "search" component renders search form for user input:
//       |
//       |       <Search
//       |         value={this.state.search}
//       |         handleInputChange={this.handleInputChange}
//       |         handleFormSubmit={this.handleFormSubmit}
//       |       />
//       |    )
//       |  }
// end notes
