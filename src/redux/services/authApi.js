import baseRequest from "../../utils/baseUrl";
import { toast } from "react-toastify";
import { authActions } from "../slices/authSlice";

function loginUser(user) {
  return async (dispatch) => {
    try {
      const response = await baseRequest.post("auth/login", user);
      dispatch(authActions.login(response.data));
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      toast.success("logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
function logoutUser() {
  return (dispatch) => {
    dispatch(authActions.logout());
    localStorage.removeItem("userInfo");
  };
}

export { loginUser, logoutUser };
