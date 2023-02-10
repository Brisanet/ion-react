<img src="src/stories/assets/capa.svg">

<b>React Version</b>

<a href="https://codeclimate.com/github/iurynogueira/ion-react/maintainability"><img src="https://api.codeclimate.com/v1/badges/48ab263c3be483f0a6d2/maintainability" /></a>
<a href="https://codeclimate.com/github/iurynogueira/ion-react/test_coverage"><img src="https://api.codeclimate.com/v1/badges/48ab263c3be483f0a6d2/test_coverage" /></a>
[![Production](https://github.com/iurynogueira/ion-react/actions/workflows/prod.yml/badge.svg?branch=main)](https://github.com/iurynogueira/ion-react/actions/workflows/prod.yml)
[![npm version](https://badge.fury.io/js/@brisanet%2Fion-react.svg)](https://www.npmjs.com/package/@brisanet/ion-react)

## Installation

```bash
npm i @brisanet/ion-react
```

```bash
yarn add @brisanet/ion-react
```
# Contribute
## Install and run project

To run this project, You will need to use [node v.16.19](https://nodejs.org/en/)

- Run `git clone https://github.com/iurynogueira/ion-react.git` to get a copy of the repository;
- Run `yarn install` to install all dependencies for the project;
- Run `yarn storybook` to open the storybook in your localhost.

## Storybook

<hr>

[Storybook](https://storybook.js.org/) is a component development tool that allows you to visualize and test components in isolation. This makes it easy to develop and test components, allowing you to see how they behave in different states and contexts.

### How to Run Storybook

- `yarn storybook`

This will start the Storybook server at http://localhost:6006 and you will be able to view your components in a friendly interface.

## Commit pattern

Commits should follow the [convention](https://conventionalcommits.org/).
We have the following types:

- feat: A new feature;
- fix: A bug fix;
- docs: Documentation only changes;
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc);
- refactor: A code change that neither fixes a bug nor adds a feature;
- test: Adding missing tests or correcting existing ones;
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation;
- perf: A code that improves performance;
- ci: Changes to the CI/CD process;
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm);
- temp: Temporary commits that won't be included in your CHANGELOG.

Example: `feat: add feature #issue_id`

## Deploy 🚀

<a href="https://main--63da5890a06a8f8f995110dd.chromatic.com"> Storybook </a>
