import React from 'react';
import { Dna, HandHelping, GraduationCap, HelpCircle, Sigma, BookOpenCheck, Sprout } from 'lucide-react';

// Map your string keys directly to the Lucide React components
const iconMap = {
  dna: Dna,
  hand: HandHelping,
  grad: GraduationCap,
  sigma: Sigma,
  book: BookOpenCheck,
  sprout: Sprout
};

export default function ServiceIcon({ shape }) {
  // Fallback to a default icon if the shape string doesn't match
  const IconComponent = iconMap[shape] || HelpCircle;

  return (
    <IconComponent 
      className="h-12 w-12 shrink-0" 
      aria-hidden="true" 
    />
  );
}