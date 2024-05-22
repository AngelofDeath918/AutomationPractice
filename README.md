# SmartMed Tests Cristhiam Guerrero - with Playwright

## Summary

- [Getting started (in local, for creation or debug)](#getting-started-in-local-for-creation-or-debug)
- [Run (in local)](#run-in-local)
- [Training](#training)
- [More](#more)
- [What have been changed)](#what-have-been-changed)

## Getting started (in local, for creation or debug)

#### Prerequisites

0. yarn global installed (no lower than 1.22.19 recommended)
1. node.js global installed (no lower than 18.7.0 recommended)
2. git global installed
3. git LFS installed

#### IDE extensions

- [ESlint (linter)](https://open-vsx.org/extension/dbaeumer/vscode-eslint)
- [Prettier (formatter)](https://open-vsx.org/extension/esbenp/prettier-vscode)
- [Gherkin Full Language Support + Formatting + Autocomplete](https://open-vsx.org/extension/alexkrechik/cucumberautocomplete)
- [Playwright](https://open-vsx.org/extension/ms-playwright/playwright) (allows to launch tests in the editor, and more...)

#### Setup

1. Clone repo with SSH: `TO BE EDITED`
2. Install all dependencies: `yarn`

## Run (in local)

- Try the UI IDE plugin, but you can also use command lines:
- [list of commands](https://playwright.dev/docs/running-tests#command-line)
- [list of parameters](https://playwright.dev/docs/test-cli)

### Command examples:

#### Run test:

- `yarn playwright test` -> It will run all tests in QA environment
- `yarn playwright test -g "Verify"` -> Run all the tests with 'pos' in the title (-g or --grep)

#### Create/debug test:

- `yarn playwright codegen` -> Auto generate tests with Codegen
- `yarn playwright test --debug` -> Run in debug mode
- `yarn playwright test --ui` -> Run in UI mode
- `yarn playwright test --headed` -> Run in headed mode

#### Static code checks:

- `yarn lint` -> It will check your code conformity (warning you but without fixing it), there are some other useful command scripts in package.json...

#### HTML Test Reports:

- `yarn playwright show-report` -> Display the previous run results as a html page
- `yarn playwright show-trace` -> Launch the network/run trace viewer

## More

- Visit the [official doc.](https://playwright.dev/docs/intro) for more information.

## What have been changed

Playwright is a Node. js library that lets you script and automates browsers using the same API, like Chrome, Firefox, and Safari.
