import "../styles/components/navbar.scss";

import React from "react";
import { connect } from "react-redux";
import { SignIn } from "./index";
import { Tickers } from "../components/index";
import { signOut } from "../actions/index";

class NavBar extends React.Component {
    render() {
        const authenticated = !this.props.profile.isEmpty();

        const navbarComponents = authenticated
            //? <a onClick={this.props.dispatch(signOut())} href="javascript:void(0);">Sign Out</a>
            ? <div>loggedin</div>
            : <SignIn />;

        const tickers = authenticated
            ? <Tickers quotes={this.props.quotes} />
            : null;

        return (
            <nav id="navbar" className="fill-width fixed-top box-shadow on-top">
                <div id="navbar-main">
                    <a href="javascript:void(0);">FISCUS</a>
                    {navbarComponents}
                </div>
                {tickers}
            </nav>
        );
    }
}

NavBar.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    profile: React.PropTypes.object.isRequired,
    quotes: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
         quotes: state.quoteReducer.quotes,
         profile: state.userReducer.profile,
    };
}

export default connect()(NavBar);
