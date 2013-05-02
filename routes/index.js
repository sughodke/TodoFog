
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', user: req.user });
};




exports.todos = function(req, res){
  res.render('todos', { title: 'BackboneJS Todos', user: req.user });
};
