React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

React is declarative.



Props are used to pass data,
whereas state is for managing data.
Data from props is read-only, and cannot be modified by a component that is receiving it from outside.
State data can be modified by its own component, but is private (cannot be accessed from outside)
Props can only be passed from parent component to child (unidirectional flow)
Modifying state should happen with the setState ( ) method
state is an object that is privately maintained
inside a componenet 
state can be changed within the component -> this.seState method

###########

folder structure

library vs framework

react entry point, how react works

components
class 
function

jsx - javascript xml - we can directly write html     inside any function of react we use it because we cant write create elements every time
react with the help of reactdom will convert jsx to javascript
templating - handling of html

require vs import/export 
require('../location/exacturl');
es6 - module concept - export one package - import on other side
require                                 vs          module concept
cpmplete file is brought                            single module
one by one /synchronous/ blocked                    parallel/asynchronous
require - anywhere                                  import - hoisting
require - if                                        import - no if else
if(){
    import - not allowed
    require() allowed
}
                                                    module.exports = {
                                                        can export many at once
                                                    }


manually create react app
    create blank repo - npm init
                        package.json
    add dependencies in packge.json file  - npm install react react-dometc
                        node_modules package-lock.json
            

virtual dom
lightweight representation of DOM 


single page application
fragment 
state vs props
events
constructor, super 
this keyword
counter ***********

forceupdate() -> intentionally reupdate the value
this.setState()
 accept new state object & inform virtual dom
 asynchronous like setTimeout

HOOKS 
extra functionality added in the react 16.8 onwards version which is going to serve the same purpose which any react standard feature can do in class componenet
for each and every component in react which was not available in functional component but now with the corresponding hok it now can be available.

useState (state) - 16.8 for functional component

map vs foreach 

bootstrap

BrowserRouter, Route - path element, Routes, Link - to

NavLink, nav - bootstrap

liftstate
lifting state up - child to parent

Form