module.exports = function(app) {

  // main page
  app.get('/', require('./main').get);

  app.get('/logo', require('./getLogo').get);

  app.get('/webosDrawing', require('./getWebosDrawing').get);

}
