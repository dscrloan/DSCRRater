import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQs() {
  const faqs = [
    {
      question: "How are DSCR rates determined?",
      answer: "DSCR rates are determined by evaluating the debt service coverage ratio (rental income divided by mortgage payment), loan-to-value ratio, borrower credit profile, property type, cash reserves, and current market conditions. Lenders assess risk based on these factors to price loans accordingly."
    },
    {
      question: "Can paying points meaningfully reduce my DSCR rate?", 
      answer: "Yes, paying discount points can reduce your interest rate, typically by 0.25% per point paid. However, evaluate the break-even period and total cost impact on your investment returns before deciding to pay points."
    },
    {
      question: "Does STR income change pricing vs long-term rental?",
      answer: "Short-term rental properties often face pricing overlays due to income volatility and platform dependency. Lenders may require higher reserves, lower LTV ratios, or rate adjustments to account for the increased risk profile compared to traditional long-term rentals."
    },
    {
      question: "How much does LTV affect DSCR rates?",
      answer: "LTV significantly impacts DSCR rates, with lower loan-to-value ratios typically receiving better pricing. Moving from 85% to 75% LTV can result in meaningful rate improvements as it reduces lender risk exposure through increased borrower equity."
    },
    {
      question: "Can borderline DSCR be offset with more reserves?",
      answer: "Additional cash reserves can help strengthen a loan application with borderline DSCR, but may not fully offset the ratio impact. Lenders prefer strong DSCR ratios as the primary qualifier, with reserves serving as additional risk mitigation rather than a substitute."
    },
    {
      question: "Are condos priced differently from SFR?",
      answer: "Condominiums may have different pricing depending on warrantability status, HOA financial health, and building occupancy rates. Non-warrantable condos typically face higher rates or additional overlays compared to single-family rentals."
    },
    {
      question: "Do first-time investors pay higher DSCR rates?",
      answer: "First-time investors may face slightly higher rates or additional requirements such as higher reserves or lower LTV ratios. However, strong financials, good credit, and a solid property management plan can help offset the experience factor in pricing decisions."
    }
  ];

  return (
    <section id="faqs" className="py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}