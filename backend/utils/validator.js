function validate(inputType, payload) {
  switch (inputType) {
    case "username":
      const nameValidation = /^[A-Za-z][A-Za-z0-9]{4,9}$/.test(payload);
      if (!nameValidation) {
        return {
          input: "usename",
          success: false,
          message:
            "usename must start from Alphabet and min lenght must be 5 characters",
        };
      } else {
        return null;
      }

    case "password":
      const passwordValidation =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(payload);
      if (!passwordValidation) {
        return {
          input: "password",
          success: false,
          message:
            "password must contain atlist one number, one uppercase letter, one smallercase letter and with minimum of 8 chareacter length ",
        };
      } else {
        return null;
      }

    case "email":
      const emailValidation =
        /^[a-zA-Z0-9][a-zA-Z0-9.\-_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(
          payload
        );
      if (!emailValidation) {
        return {
          input: "email",
          success: false,
          message: "email must be valid",
        };
      } else {
        return null;
      }
  }
}

export default function (inputs) {
  let returnValue = [];
  Object.keys(inputs).forEach((element) => {
    returnValue.push(validate(element, inputs[element]));
  });

  returnValue = returnValue.filter((element) =>
    element === null ? false : true
  );

  if (returnValue.length === 0) {
    return [];
  } else {
    return returnValue;
  }
}
