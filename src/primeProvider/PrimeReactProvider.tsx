"use client"; // This is necessary because PrimeReact uses client-side features

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import { ReactNode } from "react";

export function PrimeProvider({ children }: { children: ReactNode }) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
