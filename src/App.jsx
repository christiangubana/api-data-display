import React from "react";
import "./App.css";
import JsonDisplay from "./components/JsonDisplay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <QueryClientProvider client={queryClient}>
          <JsonDisplay />
        </QueryClientProvider>
      </main>
    </div>
  );
}
