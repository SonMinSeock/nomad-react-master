import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartsProps {
  coinId: string;
}

function Charts({ coinId }: ChartsProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () => fetchCoinHistory(coinId));

  return <div>Chart</div>;
}

export default Charts;
