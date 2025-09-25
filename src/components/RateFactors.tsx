export function RateFactors() {
  const factors = [
    {
      title: "DSCR Ratio",
      description: "The debt service coverage ratio compares monthly rental income to PITIA (principal, interest, taxes, insurance, association fees) plus any required buffers. Higher ratios indicate stronger cash flow."
    },
    {
      title: "LTV / Down Payment", 
      description: "Loan-to-value ratio represents the equity vs. rate trade-off. Lower LTV typically results in better pricing as it reduces lender risk exposure."
    },
    {
      title: "Points / Buydowns",
      description: "Paying discount points upfront can reduce your interest rate. Consider the effect on overall APR and break-even timeline when evaluating point options."
    },
    {
      title: "Reserves",
      description: "Months of mortgage payments held in reserves serve as a stability signal to lenders. Higher reserves can positively impact pricing decisions."
    },
    {
      title: "Credit Signals",
      description: "FICO score bands and credit history provide context for risk assessment. While not the primary factor for DSCR loans, credit profile influences final terms."
    },
    {
      title: "Investor Experience",
      description: "Number of rental properties owned, management history, and property management plans demonstrate operational capability to lenders."
    },
    {
      title: "Property Type",
      description: "Single-family rentals typically receive standard pricing, while 2-4 units, condos, and short-term rentals may have overlays due to perceived volatility."
    }
  ];

  return (
    <section id="rate-factors" className="py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8">The 7 Inputs That Move DSCR Pricing</h2>
        
        <div className="space-y-8">
          {factors.map((factor, index) => (
            <div key={index} className="border-l-4 border-primary pl-6">
              <h3 className="mb-3">{factor.title}</h3>
              <p className="text-muted-foreground">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}