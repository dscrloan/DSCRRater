export function QuickAnswer() {
  return (
    <section id="quick-answer" className="py-12 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-6">What Drives DSCR Rates Today?</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background p-6 rounded-lg border">
            <h3 className="mb-3">Risk & DSCR</h3>
            <p className="text-muted-foreground">
              Higher DSCR ratios typically improve pricing as they demonstrate stronger 
              cash flow coverage relative to debt obligations.
            </p>
          </div>
          
          <div className="bg-background p-6 rounded-lg border">
            <h3 className="mb-3">LTV & Points</h3>
            <p className="text-muted-foreground">
              Lower loan-to-value ratios and optional points payments can reduce your 
              interest rate by decreasing lender risk exposure.
            </p>
          </div>
          
          <div className="bg-background p-6 rounded-lg border">
            <h3 className="mb-3">Profile & Property</h3>
            <p className="text-muted-foreground">
              Cash reserves, credit signals, investor experience, and property type 
              (STR/condo/multi-unit) all impact final pricing decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}