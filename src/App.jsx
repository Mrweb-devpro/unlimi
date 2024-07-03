import { useEffect, useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

import { createContext } from "react";

const BASE_URl = "http://3.88.1.181:8000/products/public/catalog";

function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState([]);

  const ApiContext = createContext();

  useEffect(
    function () {
      const controller = new AbortController();

      async function getData() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `${BASE_URl}?supplier=${query}&first=0&last=50`
          );
          if (!res.ok)
            throw new Error("something went wrong while fetching the data");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Supplier not found");

          setResult(data);
          setError("");
        } catch (err) {
          console.log(err.message);
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length > 3) getData();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <ApiContext.Provider value={query}>
      <div className="text-stone-600 bg-[#f6f6f6] min-h-screen flex flex-col gap-10">
        <Nav query={query} setQuery={setQuery} />

        <Main result={result} error={error} />
      </div>
    </ApiContext.Provider>
  );
}

export default App;
