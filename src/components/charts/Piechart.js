import { Box, CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { userRequest } from "../../apiRequests";

const Piechart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);

  const Chart = () => {
    let shopName = [];
    let shopSales = [];
    setLoading(true);

    userRequest
      .get("/app/sales-by-shop")
      .then((res) => {
        for (const dataObj of res.data) {
          shopName.push(dataObj.name);
          shopSales.push(parseInt(dataObj.amount_total));
        }
        setLoading(false);
        setChartData({
          labels: shopName,
          datasets: [
            {
              data: shopSales,
              backgroundColor: [
                "rgba(255, 206, 86, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
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

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        responsive: true,

        labels: {
          boxWidth: 10,
          padding: 20,

          font: {
            size: 12,
            weight: "bolder",
          },
        },
      },
    },
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
        <div className="pie">
          <Doughnut data={chartData} options={options} />
        </div>
      )}
    </>
  );
};

export default Piechart;
