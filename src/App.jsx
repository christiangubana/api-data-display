// App.js
import React from "react";
import JsonDisplay from "./components/JsonDisplay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mx-auto p-4">
        <QueryClientProvider client={queryClient}>
          <JsonDisplay />
        </QueryClientProvider>
      </main>
      <Footer />
    </div>
  );
}
