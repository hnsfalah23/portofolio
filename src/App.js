import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
