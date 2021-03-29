import AppError from "./appError";

function test1() {
  try {
    test();
  } catch (err) {
    console.dir(err);
  }
}

test1();

function test() {
  throw new AppError("OOPS", 404);
}

// throw will raise the exception & the object we are sending it is our
// custom error object (AppError).
