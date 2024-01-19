// src/App.jsx
import React from "react";
import "./App.css";
import JsonDisplay from "./components/JsonDisplay";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <JsonDisplay />
    </QueryClientProvider>
  );
}
