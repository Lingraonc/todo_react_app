const Todos = require("../models/Todos");

//Show all todos
//Access: public
exports.index = function (req, res) {
  Todos.find({}, function (err, todo) {
    if (err) res.send(err);
    res.json(todo);
  });
};

//create new todo
//Access: public
exports.create = function (req, res) {
  const newTodo = new Todos(req.body);
  newTodo.save(function (err, todo) {
    if (err) res.send(err);
    res.json(todo);
  });
};

//Show todo by ID
//Access: public
exports.show = function (req, res) {
  Todos.findById(req.params.id, function (err, todo) {
    if (err) res.send(err);
    res.json(todo);
  });
};

//Update todo by ID
//Access: public
exports.update = function (req, res) {
  Todos.findById(req.params.id, (err, todo) => {
    if (err) res.send(err);
    let new_text = req.body.text;
    if (todo.text !== new_text) {
      todo.text = req.body.text;
      todo
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.status(400).json("Content identical!");
    }
  });
};

//remove todo by ID
//Access: private
exports.destroy = function (req, res) {
  Todos.findByIdAndDelete(req.params.id, function (err) {
    if (err) res.send(err);
    res.status(204).send();
  });
};
