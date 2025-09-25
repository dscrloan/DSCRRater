import { Button } from "./ui/button";

export function EstimatorWalkthrough() {
  const scenarios = [
    {
      ltv: "75%",
      notes: "Lower LTV typically results in better rates. Strong equity position reduces lender risk.",
      pricing: "Premium pricing tier available"
    },
    {
      ltv: "80%", 
      notes: "Standard LTV range for DSCR loans. Balanced risk profile with moderate equity.",
      pricing: "Standard pricing applies"
    },
    {
      ltv: "85%",
      notes: "Higher LTV may require points or have rate adjustments. Consider cash flow impact.",
      pricing: "May include rate adjustments"
    }
  ];

  return (
    <section id="estimator" className="py-12 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-6">3-Input Example: Price, Rent, Target LTV</h2>
        
        <div className="mb-8">
          <h3 className="mb-4">Educational Walkthrough Steps</h3>
          <ol className="space-y-3 ml-6">
            <li className="list-decimal">
              <strong>Input Purchase Price:</strong> Enter the property acquisition cost
            </li>
            <li className="list-decimal">
              <strong>Monthly Rent:</strong> Use actual lease amount or market rent analysis
            </li>
            <li className="list-decimal">
              <strong>Target LTV:</strong> Choose your desired loan-to-value ratio
            </li>
          </ol>
        </div>

        <div className="space-y-4 mb-8">
          <h3>Three Illustrative Scenarios</h3>
          {scenarios.map((scenario, index) => (
            <div key={index} className="bg-background p-6 rounded-lg border">
              <div className="flex items-start justify-between mb-3">
                <h4>{scenario.ltv} LTV Scenario</h4>
                <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                  {scenario.pricing}
                </span>
              </div>
              <p className="text-muted-foreground">{scenario.notes}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
          <p className="text-sm">
            <strong>Disclaimer:</strong> These examples are illustrative only. 
            Actual pricing varies by lender, market conditions, and individual borrower profile.
          </p>
        </div>

        <div className="text-center">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a 
              href="https://www.shopdscrloans.com" 
              target="_self"
              aria-label="Compare scenario options at shopdscrloans.com"
            >
              Compare Scenario Options →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}