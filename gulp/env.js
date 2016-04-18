const fs = require("fs");

module.exports = (path) => {
    return (done) => {
        try {
            fs.readFileSync(path).toString().split("\n").forEach((line) => {
                const entry = line.match(/^\s*([\w\-]+)\s*=\s*(.*)\s*$/);
                if (entry) {
                    const key = entry[0];
                    const value = entry[1] || "";
                    process.env[key] = value;
                }
            });
        }
        catch (err) { console.error(err); }
        finally { done(); }
    };
};
