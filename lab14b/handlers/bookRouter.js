// handle GET requests for [domain]/api/books - return all books 
const handleAllBooks = (app, Book) => { 
    app.get('/api/books', (req, resp) => { 
        // Use mongoose to retrieve all books from MongoDB 
        Book.find() 
            .then((books) => { 
                resp.json(books); 
            }) 
            .catch((err) => { 
                resp.status(500).json({ error: "Unable to retrieve books" }); 
            }); 
    }); 
};

// handle requests for specific book: e.g., /api/books/0321886518 
const handleSingleBook = (app, Book) => { 
    app.get("/api/books/:isbn", (req, resp) => { 
        Book.findOne({ isbn10: req.params.isbn }) 
            .then((book) => { 
                if (!book) {
                    resp.status(404).json({ error: "Book not found" });
                } else {
                    resp.json(book); 
                }
            }) 
            .catch((err) => { 
                resp.status(500).json({ error: "Unable to retrieve book" }); 
            }); 
    }); 
};

// handle requests for books with specific page ranges: 
// e.g., [domain]/api/books/pages/500/600 
const handleBooksByPageRange = (app, Book) => { 
    app.get("/api/books/pages/:min/:max", (req, resp) => { 
        const minPages = req.params.min;
        const maxPages = req.params.max;

        Book.find({ 'production.pages': { $gte: minPages, $lte: maxPages } }) 
            .sort({ title: 1 }) 
            .select("title isbn10") 
            .exec() 
            .then((books) => { 
                resp.json(books); 
            }) 
            .catch((err) => { 
                resp.status(500).json({ error: "Unable to retrieve books" }); 
            }); 
    }); 
};

// handle POST request for a new book 
const handleCreateBook = (app, Book) => { 
    app.route('/api/create/book') 
    .post((req,resp) => { 
        // retrieve the form data from the http request 
        const aBook = { 
            isbn10: req.body.isbn10, 
            isbn13: req.body.isbn13, 
            title: req.body.title, 
            year: req.body.year, 
            publisher: req.body.publisher, 
            production: { 
                pages: req.body.pages 
            } 
        }; 
        // now have mongoose add the book data 
        Book.create(aBook)
            .then((result) => {
                const msg = `New Book was saved
                isbn=${aBook.isbn10}`;
                resp.json({ message: msg });
            })
            .catch((err) => {
                resp.send({ message: 'Unable to connect to books' })
            })
    }); 
};



module.exports = {
    handleAllBooks,
    handleSingleBook,
    handleBooksByPageRange,
    handleCreateBook
};
