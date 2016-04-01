import "../styles/components/navbar.scss";

import React from "react";
import { connect } from "react-redux";
import { SignIn } from "./index";
import { Tickers } from "../components/index";
import { signOut } from "../actions/index";
import { getQuotes } from "../actions/index";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;

        this.handleSignout = () => { dispatch(signOut()); };
    }

    componentDidMount() {
        const { dispatch, user } = this.props;

        const authenticated = !user.isEmpty();
        if (authenticated) {
            dispatch(getQuotes());
        }
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
                        : ( !userLoading && <SignIn /> )
                    }
                </div>
                { authenticated &&
                <Tickers quotes={quotes} />
                }
            </nav>
        );
    }
}

NavBar.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired,
    userLoading: React.PropTypes.bool.isRequired,
    quotes: React.PropTypes.object.isRequired,
    quotesLoading: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    return {
        quotes: state.quoteReducer.quotes,
        quotesLoading: state.quoteReducer.loading,
    };
};

export default connect(mapStateToProps)(NavBar);
