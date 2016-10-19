// LICENSE : MIT
"use strict";
const React = require("react");
const ReactDeferRender = require("../../src/ReactDeferRender");
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