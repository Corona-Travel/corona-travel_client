<!-- prettier-ignore -->
Corona Travel client
====================

<!-- prettier-ignore -->
Develop
-------

1. we use [`git-flow`](https://github.com/petervanderdoes/gitflow-avh/wiki) to organize our code and ease development between multiple people

2. use one of [`git-flow commands`](https://danielkummer.github.io/git-flow-cheatsheet/index.html) to start a branch, run `pnpm run dev` to develop on that branch and view changes on [http://localhost:3000](http://localhost:3000), finish and push your change to remote repository

```sh
git flow feature start <name>
pnpm run dev
git flow feature finish
git flow feature publish
```

<!-- prettier-ignore -->
Commands
--------

- `dev`: start dev server
- `lint`: run linters sequentially
- `fix`: run all fixers in paralel

<!-- prettier-ignore -->
Usefull links
-------------

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

<!-- prettier-ignore -->
TODO
----

- [x] linters
- [x] fixers
- [x] conventional commit
- [x] tailwind(bootstrap?)
- [ ] i18n
- [x] docker
- [ ] ci/cd
- [x] better index page
