# Social media React and Typescript task

## Additional libraries used:

- axios - lightweaight and convenient - well, I could just use simple fetch here
- react-error-boundary - easy and convenient to use with all weird edge cases
  that I could miss when writing my own error boundary component

## What I would improve if I've had more time

- **add unit and integrations tests**
- re-write input validation and column sorting as more re-usable react hooks
- figure out nicer way to stop interval fetching (context/hooks.tsx:34) -
  obviously does not make much sense to assume number of posts we will receive
  as usually we dont know those things
- **better organisation of responsive styling**
- better design of NotFound page
- figure out why NotFound page stopped to appear

## To run locally:

- clone this repository
- go to the cloned repository directory
- run `npm start`
