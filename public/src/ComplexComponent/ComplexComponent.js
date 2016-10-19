// LICENSE : MIT
"use strict";
const React = require("react");
export default class ComplexComponent extends React.Component {
    render() {
        const count = this.props.count || 10000;
        const items = Array.from(new Array(count), (item, index) => {
            return <div key={index}><p><span>{index}</span></p></div>;
        });
        return <div className="ComplexComponent">
            {items}
        </div>;
    }
}