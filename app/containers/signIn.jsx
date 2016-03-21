import "../styles/components/signIn.scss";

import React from "react";
import { connect } from "react-redux";
import { signIn } from "../actions/index";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = () => {
            this.props.dispatch(signIn({
                signin: this.refs.signin.value,
                password: this.refs.password.value,
            }));
        };
    }

    render() {
        return (
            <form className="pull-right">
                <table id="sign-in">
                    <tbody>
                        <tr>
                            <td>
                                <label className="sr-only" htmlFor="signin"></label>
                                <input type="text" className="input-default border-black" id="signin" ref="signin" placeholder="Email or phone" />
                            </td>
                            <td>
                                <label className="sr-only" htmlFor="password"></label>
                                <input type="text" className="input-default border-black" id="password" ref="password" placeholder="Password" />
                            </td>
                            <td>
                                <button type="submit" className="btn btn-default btn-xs" onClick={this.handleSubmit}>Sign In</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a className="text-col-black" href="javascript:void(0);">Forgot your password?</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

SignIn.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};

export default connect()(SignIn);
