import React from "react";
import { connect } from "react-redux";
import { signIn } from "../actions/index";

if (__CLIENT__) require("../styles/components/signin.scss");

class SignIn extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        const { dispatch } = this.props;

        this.handleSubmit = (e) => {
            e.preventDefault();
            dispatch(signIn({
                signin: this.refs.signin.value,
                password: this.refs.password.value,
            }));
        };
    }

    render() {
        return (
            <form className="pull-right" onSubmit={this.handleSubmit}>
                <table id="sign-in">
                    <tbody>
                        <tr>
                            <td><input type="text" className="input-default border-black" id="signin" ref="signin" placeholder="Email or phone" /></td>
                            <td><input type="password" className="input-default border-black" id="password" ref="password" placeholder="Password" /></td>
                            <td><button type="submit" className="btn btn-default btn-xs">Sign In</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a className="font-size-sm" href="javascript:void(0);">Forgot your password?</a></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default connect()(SignIn);
