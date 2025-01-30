"use client";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store/store";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </Provider>
  );
}
