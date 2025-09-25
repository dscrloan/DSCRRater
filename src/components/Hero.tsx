import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6">
          DSCR Rates: What They Are and How to Compare
        </h1>
        
        <div className="mb-8 space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          <p>
            DSCR rates vary based on your debt service coverage ratio, loan-to-value ratio, 
            points paid, reserve requirements, credit profile, property type, and current 
            market conditions.
          </p>
          <p>
            This educational guide explains what drives DSCR pricing and how investors 
            can compare options through professional broker workflows.
          </p>
        </div>

        <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
          <a 
            href="https://www.shopdscrloans.com" 
            target="_self"
            aria-label="See My DSCR Options - Compare rates and loan terms"
          >
            See My DSCR Options →
          </a>
        </Button>
      </div>
    </section>
  );
}