export function DocsTimeline() {
  const impactFactors = [
    "Rent and market rent documentation support", 
    "Cash reserves verification and source",
    "Credit profile and borrowing history",
    "Property appraisal and condition assessment",
    "Property management plan and experience"
  ];

  const timelineSteps = [
    "Pre-screen qualification review",
    "Documentation submission and review", 
    "Property appraisal ordering and completion",
    "Underwriting analysis and approval",
    "Final conditions and closing coordination"
  ];

  return (
    <section id="docs-timeline" className="py-12 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8">What Impacts Pricing Review & Timeline</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4">Key Documentation Factors</h3>
            <ul className="space-y-3">
              {impactFactors.map((factor, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span className="text-muted-foreground">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4">Typical Process Timeline</h3>
            <div className="space-y-4">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-background border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Timeline Note:</strong> Processing times vary based on documentation completeness, 
            appraisal scheduling, and individual loan complexity. No guarantees on specific timelines.
          </p>
        </div>
      </div>
    </section>
  );
}