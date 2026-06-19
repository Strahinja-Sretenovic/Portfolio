import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-blue-600/30 selection:text-slate-900 dark:selection:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
