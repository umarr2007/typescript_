import { getAllbanks, type AllBanks } from "@/models/BankModel";
import { useEffect, useState } from "react";

function Banks() {
  const [bank, setBank] = useState<AllBanks | null>(null);

  useEffect(() => {
    getAllbanks()
      .then((res) => setBank(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex",  gap: "20px", flexDirection: "column", alignItems: "center" }}>
      {bank &&
        bank.banks.map((b, i) => (
          <p key={i}>
            {b.full_title} - Buying: {b.buying}
          </p>
        ))}
    </div>
  );
}

export default Banks;
