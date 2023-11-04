const PROXY_CONFIG = [
  {
    context: [
      "/api/todo",
    ],
    target: "https://localhost:7142/",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
