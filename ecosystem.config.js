module.exports = {
  apps: [
    {
      name: "jurti-app",
      script: "npm",
      args: "run start",
      env: {
        PORT: 4050,
        NODE_ENV: "production"
      }
    }
  ]
}
