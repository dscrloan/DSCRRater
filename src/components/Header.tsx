import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="font-medium">DSCR Rater</div>
        </div>
        
        <nav className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Home</a>
            <span>›</span>
            <span>DSCR Rates</span>
          </div>
          
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a 
              href="https://www.shopdscrloans.com" 
              target="_self"
              aria-label="See My DSCR Options - Compare rates and loan terms"
            >
              See My DSCR Options →
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}