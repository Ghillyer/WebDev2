require('dotenv').config(); 
const express = require('express'); 
// create an express app 
const app = express();
// serves up static files from the public folder. 
app.use(express.static('public')); 
// also add a path to static 
app.use('/static', express.static('public'));

const Book = require('./models/Book');
// tell node to use json and HTTP header features in body-parser 
app.use(express.urlencoded({extended: true})); 
// use the route handlers 
const bookRouter = require('./handlers/bookRouter.js'); 
bookRouter.handleAllBooks(app, Book);
bookRouter.handleSingleBook(app, Book);
bookRouter.handleBooksByPageRange(app, Book); 
bookRouter.handleCreateBook(app, Book);



require('./handlers/dataConnector.js').connect(); 



app.use(function (req, res, next) { 
    res.status(404).send("Sorry can't find that!") 
   }); 
   const port = process.env.port;
   app.listen(port, () => { 
    console.log("Server running at port= " + port);
});
