import { getDollar, type DollarAverage } from "@/models/BankModel";
import { useEffect, useState } from "react";
function DollarRate() {
  const [price, setPrice] = useState<DollarAverage | null>(null);

  useEffect(() => {
    getDollar().then((res) => setPrice(res));
  });
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Dollar rate for:
        {new Date(price?.results?.current_date || "").toLocaleDateString(
          "uz-UZ"
        )}
      </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
        <h2>Average purchase rate: {price?.results.average.buying}</h2>{" "}
        <h2>Average selling rate:{price?.results.average.selling}</h2>
      </div>
    </div>
  );
}

export default DollarRate;
