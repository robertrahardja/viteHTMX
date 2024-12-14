// src/catFacts.ts
export interface CatFact {
  fact: string;
  length: number;
}

export const handleCatFact = (event: Event): void => {
  console.log('HTMX Event:', event);
  console.log('Event type:', event.type);
  console.log('Event target:', event.target);
  console.log('Event detail:', (event as any).detail);

  const factDisplay = document.getElementById('fact-display');
  if (factDisplay) {
    try {
      console.log('Raw innerHTML:', factDisplay.innerHTML);
      const response = JSON.parse(factDisplay.innerHTML);
      console.log('Parsed response:', response);
      factDisplay.innerHTML = `From the API: ${response.fact}`;
    } catch (error) {
      console.error('Error processing cat fact:', error);
      console.log('Failed innerHTML content:', factDisplay.innerHTML);
    }
  }
}

export const fetchCatFact = async (): Promise<CatFact> => {
  const response = await fetch('https://catfact.ninja/fact');
  const data: CatFact = await response.json();
  return data;
}
