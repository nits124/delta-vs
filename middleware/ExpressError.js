// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

// defines a custom error class named ExpressError, which extends the built-in Error class. It is designed to be used in an Express.js application for handling errors with custom status codes and messages.
// defines a new class ExpressError that inherits from the built-in Error class.
// By extending Error, we ensure that ExpressError behaves like a standard error.

// this is the constructor function, which is called when a new instance of ExpressError is created.
// It takes two parameters:
// status: The HTTP status code (e.g., 404 for "Not Found", 500 for "Server Error").
// message: The error message (e.g., "Page not found").

class ExpressError extends Error{
    constructor(status,message){
        super();
//         super(); calls the parent (Error) class constructor.
//    super(message); ensures that Error properly sets the message property.
        // Calls the constructor of the parent Error class.
        // This ensures that the error object is properly initialized.

        this.status=status;
        this.message=message;
        // Assigns the provided status and message values to the object instance.
    }
}
module.exports=ExpressError;
// This exports the ExpressError class so it can be used in other files.
