export function StateSnapshots() {
  const states = [
    {
      name: "Florida",
      path: "/states/florida",
      points: [
        "High STR activity may impact pricing overlays",
        "Hurricane insurance requirements affect PITIA calculations", 
        "Strong rental demand in major metro areas"
      ]
    },
    {
      name: "Texas", 
      path: "/states/texas",
      points: [
        "No state income tax benefits for investors",
        "Property tax considerations in DSCR calculations",
        "Diverse markets from Austin to Houston"
      ]
    },
    {
      name: "Arizona",
      path: "/states/arizona", 
      points: [
        "Growing population driving rental demand",
        "Water rights and HOA considerations",
        "Phoenix and Tucson investor-friendly markets"
      ]
    },
    {
      name: "Tennessee",
      path: "/states/tennessee",
      points: [
        "No state income tax advantage",
        "Nashville and Memphis growth markets", 
        "Landlord-friendly regulations"
      ]
    },
    {
      name: "Michigan",
      path: "/states/michigan",
      points: [
        "Seasonal considerations for property management",
        "Detroit market recovery opportunities",
        "Winter maintenance impact on reserves"
      ]
    },
    {
      name: "Indiana", 
      path: "/states/indiana",
      points: [
        "Affordable property prices and solid yields",
        "Indianapolis market stability",
        "Lower insurance costs vs coastal states"
      ]
    },
    {
      name: "Ohio",
      path: "/states/ohio",
      points: [
        "Strong rental markets in Columbus and Cincinnati", 
        "Affordable entry points for new investors",
        "Stable property values and rent growth"
      ]
    },
    {
      name: "Georgia",
      path: "/states/georgia", 
      points: [
        "Atlanta metro growth driving demand",
        "Business-friendly environment", 
        "Diverse property types and price points"
      ]
    }
  ];

  return (
    <section id="states" className="py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-8">Pricing Nuance by State</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {states.map((state) => (
            <div key={state.name} className="bg-muted/50 p-6 rounded-lg border hover:shadow-md transition-shadow">
              <h3 className="mb-4">{state.name}</h3>
              <ul className="space-y-2 mb-4">
                {state.points.map((point, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {point}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://www.shopdscrloans.com${state.path}`}
                className="text-primary hover:underline underline-offset-4 transition-colors"
                target="_self"
              >
                {state.name} DSCR Options →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}