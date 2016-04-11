import React from "react";
import Immutable from "immutable";
import { connect } from "react-redux";
import { SignIn } from "./index";
import { Tickers } from "../components/index";
import { signOut } from "../actions/index";
import { getQuotes } from "../actions/index";

if (__CLIENT__) require("../styles/components/navbar.scss");

class NavBar extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
        user: React.PropTypes.instanceOf(Immutable.Map).isRequired,
        userLoading: React.PropTypes.bool.isRequired,
        quotes: React.PropTypes.instanceOf(Immutable.List).isRequired,
        quotesLoading: React.PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        const { dispatch } = this.props;

        this.handleSignout = () => { dispatch(signOut()); };
    }

    render() {
        const { user, userLoading, quotes } = this.props;

        const authenticated = !user.isEmpty();
        return (
            <nav id="navbar" className="fill-width fixed-top box-shadow on-top">
                <div id="navbar-main">
                    <a href="javascript:void(0);">FISCUS</a>
                    { authenticated
                        ? <a onClick={this.handleSignout} href="javascript:void(0);">Sign Out</a>
                        : (!userLoading && <SignIn />)
                    }
                </div>
                { authenticated && <Tickers quotes={quotes} /> }
            </nav>
        );
    }
}

export default connect()(NavBar);
