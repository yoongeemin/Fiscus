import React from "react";
import classnames from "classnames";

if (__CLIENT__) require("../styles/components/sidebar.scss");

class SideBarSubMenu extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
        glyphicon: React.PropTypes.string,
        onSubMenuClick: React.PropTypes.func,
    };

    render() {
        return (
            <li className="sidebar-submenu fill-width">
                <a href="javascript:void(0);" className="position-relative display-table-cell" onClick={this.props.onSubMenuClick}>
                    <span className={this.props.glyphicon}></span>
                    <span className="menu-option-text">{this.props.name}</span>
                </a>
            </li>
        );
    }
}


class SideBarMenu extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
        glyphicon: React.PropTypes.string,
        active: React.PropTypes.bool,
        open: React.PropTypes.bool,
        subMenus: React.PropTypes.array,
        onMenuActive: React.PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.handleSubMenuClick = () => {
            this.props.onMenuActive(this.props.name);
        };

        this.handleMenuClick = () => {
            if (this.props.open === null) {
                this.props.onMenuActive(this.props.name);
            }
            else {
                this.setState({ open: !this.state.open });
            }
        };
    }

    state = {
        open: this.props.open,
        active: this.props.active,
    };

    render() {
        const _this = this;

        const subMenuList = (_this.props.subMenus) && _this.props.subMenus.map((subMenu, index) => {
            return (
                <SideBarSubMenu
                    key={index}
                    name={subMenu.name}
                    glyphicon={subMenu.glyphicon}
                    onSubMenuClick={_this.handleSubMenuClick}
                />
            );
        });

        const subMenuClass = (_this.state.open) ? "open" : "closed";
        const menuClass = classnames("sidebar-menu", { "active": _this.state.active });

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
                    glyphicon={menu.glyphicon}
                    name={menu.name}
                    active={_this.state.active === menu.name}
                    open={menu.open}
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
