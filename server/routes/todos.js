module.exports = function (app) {
  const controller = require("../controllers/todosController.js");
  app.get("/todos", controller.index).post("/todos", controller.create);
  app
    .get("/todos/:id", controller.show)
    .put("/todos/:id", controller.update)
    .delete("/todos/:id", controller.destroy);
};
