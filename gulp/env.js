module.exports = (env, hostname, port) => {
    return (done) => {
        process.env.NODE_ENV = env;
        process.env.HOSTNAME = hostname;
        process.env.PORT = port;
        done();
    };
};
