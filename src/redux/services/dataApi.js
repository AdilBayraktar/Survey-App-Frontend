import { toast } from "react-toastify";
import baseRequest from "../../utils/baseUrl";
import { dataActions } from "../slices/dataSlice";

export const getAllQuestions = () => {
  return async (dispatch) => {
    try {
      dispatch(dataActions.setLoading());
      const { data } = await baseRequest.get("/questions");
      dispatch(dataActions.setDataList(data));
      dispatch(dataActions.clearLoading());
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(dataActions.clearLoading());
    }
  };
};

export const getRandomData = () => {
  return async (dispatch) => {
    try {
      const { data } = await baseRequest.get("/questions/random");
      dispatch(dataActions.setRandomData(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export const getQuestionById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await baseRequest.get(`/questions/${id}`);
      dispatch(dataActions.setSingleData(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export const createQuestion = (question) => {
  return async (dispatch, getState) => {
    try {
      dispatch(dataActions.setLoading());
      await baseRequest.post("/questions", question, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(dataActions.setisDataCreated());
      setTimeout(() => dispatch(dataActions.clearisDataCreated()), 2000);
      toast.success("Question Created Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(dataActions.clearLoading());
    }
  };
};

export const updateQuestion = (question, id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(dataActions.setLoading());
      await baseRequest.put(`/questions/${id}`, question, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(dataActions.setSingleData());
      toast.success("Question Updated Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(dataActions.clearLoading());
    }
  };
};

export const deleteQuestion = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await baseRequest.delete(`/questions/${id}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(dataActions.deletaQuestion(data.id));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

// Responses

export const getAllResponse = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(dataActions.setLoading());
      const { data } = await baseRequest.get("/responses", {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(dataActions.setResponseList(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export const sendResponse = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(dataActions.setLoading());
      await baseRequest.post("/responses", data);
      dispatch(dataActions.setisDataCreated());
      setTimeout(() => dispatch(dataActions.clearisDataCreated()), 2000);
      dispatch(dataActions.clearLoading());
      toast.success("Thank you, Your Response Sent Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(dataActions.clearLoading());
    }
  };
};
