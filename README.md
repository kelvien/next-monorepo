## Goal
This repository is to illustrate NextJS apps in a monorepo. Multiple applications shares code under the `shared` directory
- app1 (NextJS app 1)
- app2 (NextJS app 2)
- shared (Shared code)

What is the shared code used here?
- `/` uses a shared button component
- `/api/hello` uses a shared infra code for logging purposes

## See how it works
- Open 1 terminal and run 
  - `cd app1`
  - `npm run dev`
  - Open `localhost:3000`
- Open another terminal and run
  - `cd app2`
  - `npm run dev`
  - Open `localhost:3001`

## Explanation on how it works
[config.module.rules[0].include.push(path.resolve(__dirname, "../shared"))](app1/next.config.js#L5)
NextJS config lets us modify the config that has been defined by NextJS. This configuration change is to include our `shared` directory into the list of files that `babel-loader` needs to transpile.
