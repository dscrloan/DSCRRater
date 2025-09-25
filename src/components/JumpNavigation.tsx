export function JumpNavigation() {
  const sections = [
    { id: "quick-answer", label: "Quick Answer" },
    { id: "rate-factors", label: "Rate Factors" },
    { id: "estimator", label: "Estimator" },
    { id: "states", label: "States" },
    { id: "property-types", label: "Property Types" },
    { id: "improve-pricing", label: "Improve Pricing" },
    { id: "docs-timeline", label: "Docs & Timeline" },
    { id: "faqs", label: "FAQs" }
  ];

  return (
    <nav className="border rounded-lg p-4 bg-muted/50" aria-label="Page navigation">
      <h2 className="mb-3">Jump to Section</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`}
              className="text-sm hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}