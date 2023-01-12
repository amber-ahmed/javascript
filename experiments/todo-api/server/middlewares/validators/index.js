import { body, validationResult } from "express-validator";



function uerRegisterationValidation() {

  return [
    body("username", "username cannot be empty").notEmpty(),
    body("email", "Invalid emeil").isEmail(),
    body("phone", "Invlid phone number").isMobilePhone(),
    body("location", "Invalid location").isLength({ min: 2 }),
    body("password", "password length must be above 4").isLength({ min: 5 }),
    body("password2", "passwords does not match").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password does not match");
      }
      return true;
    })
  ];
}

function userLoginValidation(req) {
  return [
    body("email", "Invalid email").isEmail(),
    body("password", "Wrong password").isLength({ min: 5 }),
  ];
}

function todoAddValidator(){
  return [
    body("todoName", "task cannot be empty").notEmpty()
  ];
}

function todoDeleteValidator(){
  return [
    body('taskNumber',"Give valid task number").isNumeric()
  ]
}


function errorMiddleWare(req, res, next) {
  if(req.logged)
    return next()
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
  }
  return next();
}
export { userLoginValidation, uerRegisterationValidation, todoAddValidator, errorMiddleWare, todoDeleteValidator };
