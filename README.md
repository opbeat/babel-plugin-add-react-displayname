# babel-plugin-add-react-displayname

Automatically detects and sets displayName for React components. 
This is useful for having real component names show up in production builds of React apps.

Babel already does this for `React.createClass` style components, this adds support for the two other kinds of component definitions:
 * ES6-classes style components
 * Stateless components that return JSX


## Installation
Simply add `babel-plugin-add-react-displayname` to your `.babelrc` file:

```json
{
    "plugins": ["babel-plugin-add-react-displayname"]
}
```

## Testing

`npm test`
