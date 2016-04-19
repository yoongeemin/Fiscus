import React from "react";
import Immutable from "immutable";
import { connect } from "react-redux";

//if (__CLIENT__) require("../styles/components/analyzer.scss");

class Analyzer extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        const { dispatch } = this.props;
    }

    render() {
        return (
            <div>Analyzer</div>
        );
    }
}

export default connect()(Analyzer);

