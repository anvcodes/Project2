var config = {
  development: {
    username: "root",
    password: process.env.DEV_DB_PASS,
    database: "friendFind",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "LMR0305",
    database: "testDB",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};

module.exports = config;
