import {
  combineValidators,
  composeValidators,
  isRequired,
} from "revalidate";

export const loginValidator = ({ ...props }) => {
  return combineValidators({
    userName: composeValidators(
      isRequired({ message: "Please Insert User Name" })
    )("userName"),
    password: composeValidators(
      isRequired({ message: "Please Insert Password" })
    )("password"),
  })(props);
};
