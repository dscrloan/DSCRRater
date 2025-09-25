import { Button } from "./ui/button";

export function ImprovePricing() {
  const strategies = [
    {
      strategy: "Accept Lower LTV",
      description: "Increase your down payment to reduce loan-to-value ratio, which typically results in better interest rates due to reduced lender risk."
    },
    {
      strategy: "Add Cash Reserves", 
      description: "Maintain additional months of mortgage payments in reserves to demonstrate financial stability and risk mitigation to lenders."
    },
    {
      strategy: "Consider Points/Buydowns",
      description: "Evaluate paying discount points upfront to reduce your interest rate, especially if you plan to hold the property long-term."
    },
    {
      strategy: "Strengthen Rent Evidence",
      description: "Provide comprehensive rent rolls, lease agreements, and market rent analyses to support income projections and DSCR calculations."
    },
    {
      strategy: "Document Experience",
      description: "Showcase your property management plan, rental property portfolio, and operational experience to demonstrate capability to lenders."
    }
  ];

  return (
    <section id="improve-pricing" className="py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8">5 Ways Investors Lower DSCR Rates</h2>
        
        <div className="space-y-6 mb-8">
          {strategies.map((item, index) => (
            <div key={index} className="flex gap-4 p-6 border rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-medium">
                {index + 1}
              </div>
              <div>
                <h3 className="mb-2">{item.strategy}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a 
              href="https://www.shopdscrloans.com" 
              target="_self"
              aria-label="See realistic DSCR options"
            >
              See Realistic Options →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}