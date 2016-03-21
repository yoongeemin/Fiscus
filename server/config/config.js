import _ from "lodash";
import path from "path";
import development from "./env/development";
import qa from "./env/qa";
import production from "./env/production";

const defaults = {
    root: path.resolve(__dirname, "..", ".."),
    sessionSecret: ["shhh", "this is a secret"],
    smtpUser: "yoongeemin@gmail.com",
    smtpPassword: "jywzaiwblxbqfvug",
};

let config;
switch (process.env.NODE_ENV) {
    case "development":
        config = development;
        break;
    case "qa":
        config = qa;
        break;
    case "production":
        config = production;
        break;
    default:
        break;
}

export default _.extend(defaults, config);

