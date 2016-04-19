import React from "react";
import { SideBar } from "./index";
import menus from "../config/menu.json";

export default class Dashboard extends React.Component {
	render() {
        return (
            <div id="dashboard" className="fill-height">
                <SideBar menus={menus} />

            </div>
        );
	}
}
