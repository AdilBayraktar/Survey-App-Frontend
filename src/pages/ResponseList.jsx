import { Box, Card, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllResponse } from "../redux/services/dataApi";
import Loader from "../components/Loader";

const ResponseList = () => {
  const { responseList, isLoadingData } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  //   console.log(responseList);

  useEffect(() => {
    dispatch(getAllResponse());
  }, []);
  return (
    <Container sx={{ my: "3rem" }}>
      {isLoadingData ? (
        <Loader />
      ) : (
        <Container>
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 500 }}
            color={"green"}
          >
            All Responses
          </Typography>
          <Box>
            {responseList.map((item) => (
              <Card sx={{ px: 3, py: 2, borderRadius: 4, my: 2 }}>
                {item.answers.map((ans) => (
                  <>
                    <Typography variant="subtitle1" color={"gray"}>
                      {ans.questionText}
                    </Typography>
                    <Typography variant="subtitle2" color={"goldenrod"}>
                      {ans.answer}
                    </Typography>
                  </>
                ))}
                <Typography
                  variant="caption"
                  sx={{
                    color: "#fff",
                    background: "gray",
                    px: 1,
                    py: "4px",
                    float: "right",
                    borderRadius: 3,
                  }}
                >
                  {new Date(item.createdAt).toLocaleDateString()}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      )}
    </Container>
  );
};

export default ResponseList;
