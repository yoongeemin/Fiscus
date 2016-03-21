import _ from "lodash";
import * as appActionCreator from "./appActionCreator";
import * as userActionCreator from "./userActionCreator";

module.exports = _.assign({},
    appActionCreator,
    userActionCreator
);
