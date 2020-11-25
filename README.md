## Goal
This repository is to illustrate NextJS apps in a monorepo. Multiple applications (in this case there is only one) shares code under the `shared` directory
- app1 (NextJS app)
- shared (Shared code)

What is the shared code used here?
- `/api/hello` uses a shared infra code for logging purposes
- `/` uses a shared button component

## Why
To share code between multiple NextJS app within one repository (monorepo)

## See how it works
- Open 1 terminal and run 
  - `cd app1`
  - `npm run dev`
- Open another terminal and run
  - `cd app2`
  - `npm run dev`

## Explanation on how it works
[config.module.rules[0].include.push(path.resolve(__dirname, "../shared"))](app1/next.config.js#5) - NextJS config lets us modify the config that has been defined by NextJS. This configuration change is to include our `shared` directory into the list of files that `babel-loader` needs to transpile.
