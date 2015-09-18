## Express Library With Server Side Requests!

You are going to enhance your [library app](https://github.com/gSchool/express_library_app) that you made previously.  It should support the same CRUD features to create a book as before, but it should also support the following:

### Part 1

* Add a root route, ("/"), that displays a search box to the user.  The search box should allow the user to search for a book title.
* Add a route ("/searchresults"), that displays each search result.
    * The results should display the book's title, author, year, ISBN (use ISBN 13 if available, otherwise, ISBN 10), average rating, retail price, and a button to "buy" the book.
    * Buying the book should create a document in mongo that will then show up on the index page.
    * The app should now store all of the book properties listed above (excluding the buy button of course).
    
### Part 2

Style your page.  This is required!  At least allow the user to navigate to all parts of the page that make sense.  For example, I should be able to navigate to the home search page, the index page that shows all the books I own, and the new page to enter a new book.

### Part 3

Figure out how to support html views via ejs as well as ajax requests to your server.  Make your create operation support an ajax request from the client side.  Next, instead of having the buy button trigger a new page load, make the request in ajax.  On completion of the success ajax post, give some visual indication to the user that the book has been purchased.  For example, put a check mark icon next to the book, or grey out that book for purchase.


## Hints

1. You can use the [google books api](https://developers.google.com/books/docs/v1/using) for executing a server side search.  If you find an api you like better, feel free to use it.
2. The method in the form tag for the root search page should be a GET request.  No server side state is changing for the request.  This will likely mean that your search terms are on the query string of your request.
3. You will likely need use the javascript method ```encodeURIComponent``` for your search term.   Look it up! 
4. To support ajax on the server side, research ```res.json``` or ```res.format```.  Using res.format will allow your server to handle html responses or json responses.
  * A post normally responds with a redirect to another page, like show.  In the case of an ajax post request, what should you respond with?  