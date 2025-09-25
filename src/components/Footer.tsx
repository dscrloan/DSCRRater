import { Button } from "./ui/button";

export function Footer() {
  return (
    <>
      {/* Bottom CTA Band */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-primary-foreground">Ready to Compare DSCR Options?</h2>
          <p className="mb-8 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Get personalized rate quotes and loan terms from multiple lenders through 
            our professional broker network.
          </p>
          <Button size="lg" variant="secondary" asChild>
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

      {/* Footer */}
      <footer className="py-8 border-t bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="font-medium">DSCR Rater</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm text-muted-foreground">Educational content only</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="/sitemap" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sitemap
              </a>
              <a 
                href="/privacy" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}