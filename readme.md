# Typescript ❤️ React Redux

This project is typescript version of [Redux todomvc examples](https://github.com/reduxjs/redux/tree/master/examples/todomvc).

## Purpose
Demonstrate how to annotate type in react-redux project with `strict` flag on.

## What TS bring you in React Redux?
- Ensure reducers are always pure, which do not accidentally mutate previous state
- Type checking for reducers
    - prevent accessing non-existing properties of action/state
    - type check on return type
- Fluent coding experience for Props declaration of React components 
- Check style attributes

## Use case
- Have a big team / project

## Suggestion for TS beginners
- enable `strict` flag in `tsconfig.json`, enforce the type annotation as strict as possible
- At the begining annotate everything to `any`, annotate type later. It will save you a lot of time.
- When a error occure, read message bottom-up.
- Utilize command key, which help you jump to type definition.
