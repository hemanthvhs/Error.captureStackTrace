class AppError extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = statuscode;

    Error.captureStackTrace(this);
    //Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;

//**************Error.captureStackTrace*************** */

// Error.captureStackTrace will create an property stack on the error obejct. This will be created automatically.
// It takes two arguments, the first is where to store the stack frames & the nexr argument is till what stack frames we need to include.
// In our case, this refers to the AppError object & this.constructor means we should not include the current call & the future calls. I mean we will capture the stacks till the error has occured. Once error has occured we will call the new AppError() , so this.constructor will not include, this call in the stack property of the error object. Try commenting & uncommenting the lines 6 & 7 for better understanding.
