import { Box, CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { userRequest } from "../../apiRequests";
import moment from "moment";

const Barchart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);

  const Chart = () => {
    let amount = [];
    let month = [];
    let name = [];
    setLoading(true);
    userRequest
      .get("/app/sales-by-shop?monthly=true")
      .then((res) => {
        for (const dataObj of res.data) {
          amount.push(parseInt(dataObj.amount_total));
          month.push(moment(new Date(dataObj.month)).format("MMM"));
          name.push(dataObj.name);
        }
        setLoading(false);
        setChartData({
          labels: month,
          datasets: [
            {
              label: "amount",
              data: amount,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },

            {
              label: "name",
              data: name,
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Chart();
  }, []);
  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <div className="bar">
          <div>
            <Bar
              data={chartData}
              options={{
                responsive: true,

                scales: {
                  yAxes: {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Barchart;
