import React from "react";
import classnames from "classnames";

if (__CLIENT__) require("../styles/components/sidebar.scss");

class SideBarMenu extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
        glyphicon: React.PropTypes.string,
        active: React.PropTypes.bool,
        initOpen: React.PropTypes.bool,
        subMenus: React.PropTypes.array,
        onMenuActive: React.PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.handleMenuClick = () => {
            if (this.props.subMenus) {
                this.setState({ open: !this.state.open });
            }
            else {
                this.props.onMenuActive(this.props.name);
            }
        };

        this.handleSubMenuClick = () => {
            this.props.onMenuActive(this.props.name);
            // Push history
        };
    }

    state = {
        open: this.props.initOpen,
    };

    render() {
        const _this = this;

        const subMenuList = (_this.props.subMenus) && _this.props.subMenus.map((subMenu, index) => {
            return (
                <li key={index} className="sidebar-submenu fill-width">
                    <a href="javascript:void(0);" className="position-relative display-table-cell" onClick={_this.handleSubMenuClick}>
                        <span className={subMenu.glyphicon}></span>
                        <span className="menu-option-text">{subMenu.name}</span>
                    </a>
                </li>
            );
        });

        const subMenuClass = (_this.state.open) ? "open" : "closed";
        const menuClass = classnames("sidebar-menu", { "active": _this.props.active });
        return (
            <div className={menuClass}>
                <a href="javascript:void(0);" onClick={_this.handleMenuClick}>
                    <span className={this.props.glyphicon} aria-hidden="true"></span>
                    <span className="menu-option-text">{this.props.name}</span>
                </a>

                <ul className={subMenuClass}>
                    {subMenuList}
                </ul>
            </div>
        );
    }
}


export default class SideBar extends React.Component {
    static propTypes = {
        menus: React.PropTypes.array.isRequired,
    };

    state = { active: "Apps" };

    render() {
        const _this = this;
        const sideBarMenus = this.props.menus.map((menu, index) => {
            return (
                <SideBarMenu
                    key={index}
                    name={menu.name}
                    glyphicon={menu.glyphicon}
                    active={_this.state.active === menu.name}
                    initOpen={menu.open}
                    subMenus={menu.subMenus}
                    onMenuActive={(name) => { _this.setState({ active: name }); }}
                />
            );
        });

        return (
            <div id="sidebar" className="left fill-height box-shadow position-relative">
                {sideBarMenus}
            </div>
        );
    }
}
