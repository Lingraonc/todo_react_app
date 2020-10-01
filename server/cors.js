module.exports = function (app) {
  const cors = require("cors");

  const publicOptions = {
    origin: function (origin, callback) {
      callback(null, true);
    },
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  };
  app.options("*", cors(publicOptions));
  app.use(cors(publicOptions));
};
