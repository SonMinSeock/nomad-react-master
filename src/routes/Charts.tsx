import React from "react";
import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";
import { fetchCoinHistory } from "../api";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: number;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "sales",
              data: data?.map((price) => price.close) as number[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              toolbar: {
                show: false,
              },
              height: 500,
              width: 500,
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
