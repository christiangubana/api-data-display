// App.js
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonDisplay from "./components/JsonDisplay";

import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mx-auto p-4">
        <QueryClientProvider client={queryClient}>
          <JsonDisplay page={page} setPage={setPage} />
        </QueryClientProvider>
      </main>
      <Footer />
    </div>
  );
}
