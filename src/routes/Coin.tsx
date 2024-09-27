import { useParams } from "react-router-dom";

interface RouterParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RouterParams>();

  console.log(coinId);
  return <h1>Coin</h1>;
}

export default Coin;
