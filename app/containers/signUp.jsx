import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { signUp } from "../actions/index";

if (__CLIENT__) require("../styles/components/signup.scss");

class SignUp extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.handleSubmit = () => {
            this.props.dispatch(signUp({
                first_name: this.refs.first_name.value,
                last_name: this.refs.last_name.value,
                email: this.refs.email.value,
                mobile: this.refs.mobile.value,
                password: this.refs.password.value,
            }));
        };
    }

    render() {
        return (
            <form id="sign-up" className="margin-auto">
                <div className="display-flex flex-justify-space two-form-groups">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="first_name"></label>
                        <input type="text" className="form-control" id="first_name" ref="first_name" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="last_name"></label>
                        <input type="text" className="form-control" id="last_name" ref="last_name" placeholder="Last Name" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="sr-only" htmlFor="email"></label>
                    <input type="text" className="form-control" id="email" ref="email" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label className="sr-only" htmlFor="mobile"></label>
                    <input type="text" className="form-control" id="mobile" ref="mobile" placeholder="Phone (Optional)" />
                </div>

                <div className="form-group">
                    <label className="sr-only" htmlFor="password"></label>
                    <input type="password" className="form-control" id="password" ref="password" placeholder="Password" />
                </div>

                <div className="display-flex flex-justify-space two-form-groups">
                    <div className="form-group">
                        <a className="btn btn-primary fill-width" href="javascript:void(0);" onClick={this.handleSubmit}>Sign Up</a>
                    </div>
                    <div className="form-group">
                        <Link to="/signin" className="btn btn-primary fill-width">Cancel</Link>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect()(SignUp);
