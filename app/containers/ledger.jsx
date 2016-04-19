import React from "react";
import Immutable from "immutable";
import { connect } from "react-redux";

//if (__CLIENT__) require("../styles/components/ledger.scss");

class Ledger extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        const { dispatch } = this.props;
    }

    render() {
        return (
            <div>Ledger</div>
        );
    }
}

export default connect()(Ledger);
