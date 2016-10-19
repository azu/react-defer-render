# react-defer-render

`ReactDeferRender` defer first rendering of specific component.

This component aim to improve fist paint time for user.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install react-defer-render

## Usage

```jsx
// LICENSE : MIT
"use strict";
const React = require("react");
const ReactDeferRender = require("react-defer-render");
import ComplexComponent from './ComplexComponent/ComplexComponent';
export default class App extends React.Component {
    render() {
        const style = {
            height: 300
        };
        return <div className="App">
            <ComplexComponent count={3000}/>
            <ComplexComponent count={3000}/>
            <ComplexComponent count={3000}/>
            <ReactDeferRender node={<ComplexComponent count={3000}/>}>
                <div className="PlaceHolder" style={style}>

                </div>
            </ReactDeferRender>
            <ReactDeferRender node={<ComplexComponent count={3000}/>}>
                <div className="PlaceHolder" style={style}>

                </div>
            </ReactDeferRender>
            <ReactDeferRender node={<ComplexComponent count={3000}/>}>
                <div className="PlaceHolder" style={style}>

                </div>
            </ReactDeferRender>
        </div>;
    }
}
```

See [public/](public)

## Changelog

See [Releases page](https://github.com/azu/react-defer-render/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/react-defer-render/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
