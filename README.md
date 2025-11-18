# site

> my personal website and blog, inspired by [alana goyal's website](https://www.alanagoyal.com/) based off of apple notes.

## how it works

this web app does not have a traditional backend, and is entirely a frontend project utilizing server-side rendering (ssr).

each note is a markdown file that is loaded on the server and parsed into html on the browser.

this app is built with:

- next.js 16 with app router for ssr, static generation, and markdown parsing
- typescript for typesafety
- shadcn/ui as a local component library
- tailwind css for styling

## local setup

there aren't many prerequisites other than **npm**.

1. download, fork, or template this repository
2. download dependencies via `npm i`
3. start a local development server via `npm run dev`

before making a contribution, be sure to run the following scripts:

1. run a typecheck via `npm run typecheck`
2. run eslint via `npm run lint`
3. run prettier via `npm run format`

## license

licensed under the [mit license](LICENSE).
