import { getExchangedollar, type ExchangeDollar } from "@/models/BankModel";
import { useEffect, useState } from "react";
import DollarRate from "@/components/DollarRate";
import Banks from "@/components/Banks";

function Home() {
  const [data, setData] = useState<ExchangeDollar | null>(null);
  useEffect(() => {
    getExchangedollar().then((res) => setData(res));
  }, []);

  if (!data) return <p>Yuklanmoqda...</p>;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
        <div>
          <h1>{data.buying.price}</h1>
          <p>{data.buying.banks[0].name}</p>
        </div>
        <div>
          <h1>{data.selling.price}</h1>
          <p>{data.selling.banks[0].name}</p>
        </div>
      </div>

      <DollarRate />
      <Banks/>
    </>
  );
}
export default Home;
