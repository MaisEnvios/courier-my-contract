module.exports = {
  apps: [{
    exec_mode: "cluster",
    name: "maisenvios-courier-address",
    script: "./dist/main.js",
    max_memory_restart: '600M',
    env: {
      NODE_ENV: "production",
    },
    env_development: {
      NODE_ENV: "development",
    }
  }]
}
