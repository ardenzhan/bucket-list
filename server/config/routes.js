const path      = require('path');
      users     = require('../controllers/users.js');
      items     = require('../controllers/items.js');
      sessions  = require('../controllers/sessions.js');

module.exports = (app) => {
    app.get('/users', users.index);
    app.post('/users', users.create);
    app.get('/users/:id', users.show);

    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);
    
    app.get('/items', items.index);
    app.post('/items', items.create);

    //NOT RESTful, same as users/id, but for others
    app.get('/items/:id', items.showOther);
    app.get('/status/:id', items.updateStatus);

    app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });
}