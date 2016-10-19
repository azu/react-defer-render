// LICENSE : MIT
"use strict";
const React = require("react");
class ReactDeferRender extends React.Component {
    constructor() {
        super();
        this.state = {
            isResolved: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isResolved: true
            });
        }, this.props.delay);
    }

    render() {
        if (this.state.isResolved) {
            return this.props.node;
        }
        return this.props.children;
    }
}
ReactDeferRender.propTypes = {
    children: React.PropTypes.node.isRequired,
    node: React.PropTypes.node.isRequired,
    delay: React.PropTypes.number
};
ReactDeferRender.defaultProps = {
    delay: 0
};
module.exports = ReactDeferRender;