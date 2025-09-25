export function PropertyTypes() {
  const propertyTypes = [
    {
      type: "Single-Family Rentals (SFR)",
      description: "Typically receive standard DSCR pricing as they're considered lower-risk with stable rental income patterns and easier property management.",
      considerations: "Standard underwriting guidelines apply"
    },
    {
      type: "2-4 Unit Properties", 
      description: "May have slight pricing adjustments due to increased management complexity, but multiple income streams can provide stability buffers.",
      considerations: "Potential multi-unit overlays"
    },
    {
      type: "Condominiums",
      description: "Pricing depends on warrantability status, HOA financial health, and building condition. Non-warrantable condos typically face higher rates.",
      considerations: "Warrantability and HOA review required"
    },
    {
      type: "Short-Term Rentals (STR)",
      description: "Higher income volatility leads to pricing overlays or higher reserve requirements. Platform income verification adds complexity.",
      considerations: "Income volatility and platform risk factors"
    }
  ];

  return (
    <section id="property-types" className="py-12 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8">SFR vs 2-4 Units vs Condos vs STR</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {propertyTypes.map((property, index) => (
            <div key={index} className="bg-background p-6 rounded-lg border">
              <h3 className="mb-3">{property.type}</h3>
              <p className="text-muted-foreground mb-4">{property.description}</p>
              <div className="text-sm text-primary bg-primary/10 px-3 py-2 rounded">
                {property.considerations}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}