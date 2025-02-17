// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

class ExpressError extends Error{
    constructor(status,message){
        super();
        this.status=status;
        this.message=message;
    }
}
module.exports=ExpressError;