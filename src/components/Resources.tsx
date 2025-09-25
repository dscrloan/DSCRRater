export function Resources() {
  const resources = [
    {
      title: "DSCR Loan Approval",
      description: "Learn about the approval process and requirements for DSCR loans.",
      url: "https://dscrloanapproval.com"
    },
    {
      title: "DSCR Down Payment",
      description: "Understand down payment requirements and strategies for DSCR financing.", 
      url: "https://dscrloandownpayment.com"
    },
    {
      title: "DSCR Loan Requirements",
      description: "Complete guide to qualification criteria and documentation needs.",
      url: "https://dscrloanrequirements.com"
    },
    {
      title: "DSCR Qualify",
      description: "Assessment tools and guidance for DSCR loan qualification.",
      url: "https://dscrqualify.com"
    },
    {
      title: "DSCR Underwriting", 
      description: "Deep dive into the underwriting process and decision factors.",
      url: "https://dscrunderwriting.com"
    }
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8">Resources</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-background p-6 rounded-lg border hover:shadow-sm transition-shadow">
              <h3 className="mb-2">{resource.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{resource.description}</p>
              <a 
                href={resource.url}
                className="text-primary hover:underline underline-offset-4 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {resource.title} →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.shopdscrloans.com"
            className="text-primary hover:underline underline-offset-4 transition-colors"
            target="_self"
          >
            All DSCR Topics → shopdscrloans.com
          </a>
        </div>
      </div>
    </section>
  );
}