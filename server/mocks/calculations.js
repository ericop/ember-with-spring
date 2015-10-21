module.exports = function(app) {
  var express = require('express');
  var calculationsRouter = express.Router();

  calculationsRouter.get('/', function(req, res) {
    res.send({
      'calculations': [
        {id: 1, equation:'7 - 4', result: '3'},
        {id: 2, equation:'6 / 2', result: '3'}
      ]
    });
  });

  calculationsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  calculationsRouter.get('/:id', function(req, res) {
    res.send({
      'calculation': {
        id: req.params.id,
        equation:'7 - 4',
        result: '3'
      }
    });
  });

  calculationsRouter.put('/:id', function(req, res) {
    res.send({
      'calculation': {
        id: req.params.id,
        equation:'7 - 4',
        result: '3'
      }
    });
  });

  calculationsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/calculations', calculationsRouter);
};
