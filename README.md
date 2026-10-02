## Angel's Siimple Todo App

A lightweight to-do list app for keeping track of tasks and their due dates. Users can add tasks through a validated popup form, check them off as they finish them, and delete the ones they no longer need. The project was refactored from procedural JavaScript into object-oriented classes and ES modules.

## Functionality

- **Add a todo:** The "+ Add Todo" button opens a popup form where the user enters a task name and, optionally, a due date.
- **Live form validation:** The name field is checked as the user types (2–40 characters, required). Error messages appear under the field, and the Create button stays disabled until the form is valid.
- **Form reset after submitting:** Once a todo is created, the form clears and the Create button is disabled again. If the user closes the popup without submitting, whatever they typed is kept, so nothing is lost.
- **Due dates:** When a date is chosen, the todo shows it in a readable format (for example, "Due: Oct 2, 2026"). If no date is chosen, the date area stays empty.
- **Mark as complete:** Each todo has a checkbox that tracks whether the task is done.
- **Delete:** Each todo can be removed with its Delete button.
- **Unique IDs:** Every new todo gets a unique ID, which links each checkbox to its label.
- **Responsive layout:** The page adapts to desktop, tablet, and mobile screen widths.

## Technology

- **HTML5:** semantic markup, plus a `<template>` element that each todo item is cloned from.
- **CSS3:** BEM methodology for class names, Flexbox and Grid for layout, and media queries for responsive design. Uses normalize.css and the Inter font.
- **JavaScript (ES6+):**
  - **Object-oriented programming:** two classes, each with one job.
    - `Todo` builds a single todo element from the template and sets up its event listeners.
    - `FormValidator` handles validation for a given form, exposing public `enableValidation()` and `resetValidation()` methods and keeping its helper methods private.
  - **ES modules:** code is split into `components/`, `pages/`, and `utils/`, with `import`/`export` between files. Shared data and configuration live in `utils/constants.js`.
  - **Constraint Validation API:** uses the browser's built-in `validity` and `validationMessage` to check inputs.
- **uuid:** imported from the jspm CDN to generate unique IDs for new todos.
- **GitHub Pages:** for deployment.

## Deployment

This project is deployed on GitHub Pages:

- https://apeg93.github.io/se_project_todo-app/
