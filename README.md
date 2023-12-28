Date Created: 26-12-23
Concepts:
Super Link: [React Index](Courses/ExaThought%20Learning/React%20Index.md)
Source Links: [React Tutorial for Beginners - YouTube](https://www.youtube.com/watch?v=SqcY0GlETPk)
Tags: #flashcards/frontend/react

---

## Pre Reading Checklist

- [ ] Go on a “picture walk” through it. Scan it. Look briefly at all the pictures, captions, and diagrams, but also at the section headings, bold words, and summary, and even questions at the end of the chapter, if the book has them.

- [ ] Try to answer some of the end-of-chapter questions so you have a sense of what you’re aiming at in your learning.

## Notes

### Course Intro

### Prerequisites

Should have good understanding of html, css, js ,ts

### What is React?

React is a js library fro building dynamic and interactive user interface.

When a html page is loaded in browser, it creates a tree like structure called DOM

With react we don't have to worry about querying and updating dom elements, isntead we describe a web page using small reusable elements and react will efficiently take care of updating dom elements

Components help us write reusable, modular and better organized code.

We can build components separately and then combine them to buid a web page

### Setting Up the Development Environment

Need node v16 or higher

Use prettier extension for formatting code, download the extension, go to settings and set it as default formatter and then click format on save

### Creating a React App

Two ways to create the react app

1. Use the official tool, Create React APP(CRA)
2. Vite - faster and gives smaller bundle sizes

To create new app on vite run
`npm create vite@latest` or `vite@4.1.0`

Can use vite to create any kind of js project, vue react, etc

Follow steps in app

When you go to the project directory in vs code terminal type `code + .` command to open the project files

To run webserver type `npm run dev`, see port in terminal itself
Open port in browser to get page

### Project Structure

Key files and folder
Node modules - thrid party libraries are installed here
public folder - public assets of website like images, pdf files, etc.

src folder - source folder of our application

In this app, we have a single component called App.tsx

We have index.html which contains a div with id root, which is the container of our web application.

The script element in our index.html is the entry point to our application

package.json contains information about project and dependencies, it also have dev dependencies which are used during development but never deployed.

tsconfig.json file has setting to tell ts to compile the file to js, do not touch this file unless you are an advanced user

We also have a vit.config.ts file for the vite settings.

### Creating a React Component

Extension of typescript file is ts or tsx, ts for plain ones and tsx for react components

Two ways to create a react component

1. We can use a js class
2. or function

Function is more popular now as its concise and easier to write

Function based is recommended aspect for new projects

Functions are named using Pascal Casing, where we capitalise the first letter of every word.

In react, we follow pascal casing for naming function componenets.

```
// PascalCasing
function Message() {
   return <h1>Hello World</h1>;
}
```

The above syntax is jsx called JavaScript XML, the above code gets compiled down to javascript.

Head over to babeljs.io.repl to see how jsx code gets converted to react componenets

To use the above component, we need to export it using
`export default Message;`

JSX allows us to easily create dynamic content.

### How React Works

Our current componenet tree consists of App as our root and message as the child, react takes this a and build a js component called Virtual DOM, this virtual dom is a lightweight in memeory representation or our component tree, where each node represents a component and its properties, it not same as browser dom

When state or data of a componenent changes, react updates the corresponding node in the virtual dom to reflect the new state, then it compares state of virtual dom to previous state to see the nodes that should be updated, then it updates the actual browser dom, technically updating the dom is done by a componenet library called react dom

`<React.StrictMode> is a built in component used to identify potential problems, it doesnt have a display component`

Instead of React DOM we can use react native library to render react in a mobile app

React is platform agnostic and we can use it for web or mobile and desktop devices

### React Ecosystem

React is a javascript library for building user interfaces.
We also have angular and vue which are frameworks.

Difference between library and framework
A Library is a tool that provides specific functionality.

A framework provides a set of tools and guidelines for building applications

React is only for good for dynamic ui, routing, http, managing app state, internationalization, form validation, animations.

### Building Components

### Creating a ListGroup Component

We are going to install bootstrap to give our application a modern looking feel

Bootstrap is a popular css library, which gives us classes for styling

command to install bootstrap
`npm i bootstrap@5.2.3`

To import bootstrap to our css file, go to App.css and clear the file and for index.css, delete the file.

In main.tsx add import 'bootstrap/dist/css/bootstrap.css'

To check if bootstrap is working properly, Go to browser and see if the rendering looks different

Creating a list group component

Creating a components folder is not by convention but is more organized

Go to `getbootstrap.com`, go to the docs and on the left under componenets section ,see list group.

class is a reserved keyword in javascript, hence we cannot use bootstrap tags which contain the word class, instead we use the className keyword

See how to select multiple occurecnes of same variable and modify it in vscode linux - multicursor editing

After Writing prettier wrapped our markup in parantheses `()`, this is necessary to break the markup into multiple lines.

If not using prettier, add the parantheses in return statement to use multiple line jsx

In React a component cannot return more than one element

To wrap a block with a div element, highlight the selection and then select wrap with abbreviation

### Fragments

Instead of wrapping an element in div, we can wrap it in a fragment, to do this we need to import { Fragment } from react and use it instead of a div

Now when the element is rendered on the screen we wont have an additional div like element

For an even shorter syntax, we dont have to import a fragment element, we can just use empty angle brackets <></> we are telling react to use a fragment.

```
import { Fragment } from "react";

// file name follows PascalConvention
function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
```

### Rendering Lists Dynamically

In jsx we dont have for loop, hence we use the js map method which changes the type of a variable, hence we use map to convert an element to a list element

Each child in a list should have a unique key prop, react requires each element to have a unique key prop, to identify individual elements, hence when rendering a list of items using map method, we should give each list a unique key.

### Conditional Rendering

If we want to render based on condition.

Better to use a function instead of a variable for a method as function can have parameters, hence is more dynamic.

A logical add && can be used instead of a ternary operator for conditional rendering

What is the output of the below in js?

```
true && 1
true && 'Mosh'
false && 'Mosh'
```

??
`1`, the result of entire expression is equal to 2nd value, if result is true, 2nd value will be rendered, if result is false, nothing will be rendered.

### Handling Event

React elements have a property called onClick to do an action on clicking the element

When mapping parameters using map method in react, we can add a second property as an index and with this we can see the index of the item that was clicked

The onClick mehtod can optionally have an event parameter that represents a browser event
React event like SyntheticBaseEvent is a wrapper around the browser event

If the logic of a function is bigger, do not put it in a jsx markup , but instead move it into a separate function.

Using the actual type of a variable, instead of any gives, autocompletion, type safety advantages

### Managing State

To highlight an item when clicked, we use the active class from bootstrap css

To highlight one item at a time,we need a variable to keep track of the index of the selected item, if the value of this index is -1, then it means no item is selected, if the value is 0, then it means 1 item is selected

To tell react a variable might have state which might change over time, we use a built in funciton in react called useState, use State is a hook, a hook is a function that allows us to tap into built in features in react

Use state can be initialised in the parameter and it returns an array which has two elements, the first one is a variable and the second is an updater function, we use the updater function to update the variable in the first array element.

Instead of working with two individual elements, its easier to destructure the elements into an array

Each instance of a Component will have its own state

### Passing Data Via Props

We can use props to make components reusable

To pass properties, we use an typescript interface, using interface we can define the shape of an object

### Passing Functions Via Props

We try not to implement our logic inside our list group component in order to keep it reusable

### State Vs Props

| Props                       | State                       |
| --------------------------- | --------------------------- |
| Input passed to a component | Data managed by a component |
| Similar to function args    | Similar to local variables  |
| treat it as Immutable       | mutable                     |
| Cause a re-render           | cause a re-render           |

Trying to mutate a prop ends up like an anit-pattern in react

### Passing Children

IF we type rafce, we get react functional component body

Go to Bootstrap -> docs -> component -> alert,
In alert class

There's a special prop which all components support called children

Using ReactNode as the type of children allows us to pass html in the react component

We can pass children to a component using children prop

### Inspecting Components with React Dev Tools

Components tab shows us the hierarchy of our components

To find component by name use search bar

You can also find a component by click on the Inspect the matching dom element button(eye logo) and go to elements tab, it will show the matching dom element

### Exercise: Building a Button Component

Create a bootstrap button component

To give a default value is a property is not specified
To make any property optional add a question mark after its name.

### Exercise: Showing an Alert

## Action items

Learn es7+ extension shortcuts
