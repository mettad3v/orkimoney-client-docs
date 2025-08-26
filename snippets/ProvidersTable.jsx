export const ProvidersTable = () => {
  const rows = [
    { id: "stripe", name: "Stripe", modes: "BUY", url: "https://stripe.com" },
    { id: "fonbnk", name: "Fonbnk", modes: "BUY,SELL", url: "https://fonbnk.com" },
    { id: "alchemypay", name: "Alchemypay", modes: "BUY,SELL", url: "https://alchemypay.org" },
    { id: "koywe", name: "Koywe", modes: "BUY,SELL", url: "https://koywe.com" },
    { id: "unlimit", name: "Unlimit/Gatefi", modes: "BUY,SELL", url: "https://gatefi.com" },
    { id: "yellowcard", name: "Yellowcard", modes: "BUY,SELL", url: "https://yellowcard.io" },
    { id: "onrampmoney", name: "Onramp", modes: "BUY,SELL", url: "https://onramp.money" },
    { id: "guardarian", name: "Guardarian", modes: "BUY,SELL", url: "https://guardarian.com" },
    { id: "wert", name: "Wert", modes: "BUY", url: "https://wert.io" },
    { id: "coinify", name: "Coinify", modes: "BUY,SELL", url: "https://coinify.com" },
    { id: "transak", name: "Transak", modes: "BUY,SELL", url: "https://transak.com" },
    { id: "transfi", name: "Transfi", modes: "BUY,SELL", url: "https://transfi.com" },
    { id: "onmeta", name: "Onmeta", modes: "BUY,SELL", url: "https://onmeta.in" },
  ];

  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="text-left">
          <th className="py-2 pr-3">Logo</th>
          <th className="py-2 pr-3">Orki Id</th>
          <th className="py-2 pr-3">Provider</th>
          <th className="py-2">Mode Supported</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.id} className="border-t">
            <td className="py-2 pr-3 align-middle">
              <a href={r.url} target="_blank" rel="noopener">
                <div className="h-6 flex items-center">
                  <img
                    src={`https://d31sk3i6y53c7h.cloudfront.net/assets/providers/${r.id}.svg`}
                    alt={r.name}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </a>
            </td>
            <td className="py-2 pr-3">{r.id}</td>
            <td className="py-2 pr-3">
              <a
                href={r.url}
                target="_blank"
                rel="noopener"
                className="text-blue-600"
              >
                {r.name}
                <Icon icon="square-arrow-out-up-right" size={10} color="#5b29ec" />
                
              </a>
            </td>
            <td className="py-2">{r.modes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
