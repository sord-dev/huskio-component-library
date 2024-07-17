# React Component Library

Yet another react component library.

Architect: [@sord-dev](https://github.com/sord-dev)

Component Creator: [@MisterCxmpy](https://github.com/MisterCxmpy)

## Main Packages

- rollup
- storybook
- react
- react-icons
- sass

## Compiling the library
- In a terminal navigate to this project directory.
- Run the command `npm run build-lib`
- Find the outputted files within the `/dist` directory.

## Using the library in other projects

- Take the compiled index.js file within either `/dist/esm` or `/dist/ejs` for either ECMAScript modules or Embedded JavaScript.
- Navigate to your own project and place this file within a directory like `/lib/huskio-components` or `/utils/huskio-components` directory.
- Import the whole file (not recommended) or the specific components you'd like to use.

```js
// Homepage.jsx
import { ComponentOne } from '../lib/huskio-components';

const HomePage = () => {
    return <ComponentOne />
}
```