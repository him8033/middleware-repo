class ExpressError extends Error{
    constructor(status, message){
        super();
        this.status = status;                       // this line send your custom status in error
        this.message = message;                     // this line send custom message in error
    }
}

module.exports = ExpressError;