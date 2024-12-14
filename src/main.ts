// src/main.ts
import { handleCatFact } from './catFacts';

// Make handleCatFact available globally for HTMX
declare global {
  interface Window {
    handleCatFact: typeof handleCatFact;
  }
}

window.handleCatFact = handleCatFact;

// Add HTMX event listener
document.addEventListener('DOMContentLoaded', () => {
  // Get the button and add the event listener
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('htmx:afterRequest', handleCatFact as EventListener);
  }
});
