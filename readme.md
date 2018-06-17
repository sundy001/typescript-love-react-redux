# Typescript ❤️ React Redux
This project is typescript version of [Redux todomvc examples](https://github.com/reduxjs/redux/tree/master/examples/todomvc).

## Purpose
Demonstrate how to annotate type in react-redux project with `strict` flag on.

## How to start?
```bash
yarn        # install dependency 
yarn start  # start webpack-dev-server
```

## What TS bring you in React Redux?
- Ensure reducers are always pure, which do not accidentally mutate previous state
- Type checking for reducers
    - prevent accessing non-existing properties of action/state
    - type check on return type
- Fluent coding experience for Props declaration of React components 
- Check style attributes

## Use case
- Big team
- Big project
- Lctong term maintenance proje

## Suggestion for TS beginners
- Enable `strict` flag in `tsconfig.json`, enforce the type declaration as strict as possible.
- If you found and difficult on type declaration, declare it as `any` at the begining, and fix it latter.
- Read the type error message bottom-up.
- Utilize command key, which help you jumping to type declaration.
- Don't forget upgrade your Typescript. Every new version of Typescript bring a lot of cool feature, which save your time.
