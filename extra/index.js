const greet = function (name) {
  return function (m) {
    console.log(`Hi!! ${name}, ${m}`);
  };
};
const greet_message = greet("EA19");
greet_message("Welcome To PrepBytes");
