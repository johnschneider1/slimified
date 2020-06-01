import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Routes from "./components/utils/Routes";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Routes />
    </main>
  );
}

export default App;
