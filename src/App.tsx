import React, {useState, useEffect, lazy, Suspense} from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import PreLoader from './components/PreLoader';

const Firefly = lazy(() => import ("./components/Firefly"))

const App: React.FC = () => {
  const [mode, setMode] = useState<"light"|"dark">("light");
  
  useEffect(() => {
    const root = window.document.documentElement;
    const check = localStorage.getItem("theme");
    if (check) {
      root?.classList.add(check);
      setMode(check as "light"|"dark")
    } else {
      root?.classList.add("light");
    }
  }, [])
  
  const toggleTheme = () => {
    const root = window.document.documentElement;
    root?.classList.replace(mode, mode === "light" ? "dark" : "light");
    setMode((c) => {
      if (c === "light") return "dark"
      return "light"
    })
    localStorage.setItem("theme", mode==="light"?"dark":"light")
  }
  
  return (
    <div className="">
      <Nav theme={mode} toggleTheme={toggleTheme} />
      <Suspense fallback={<PreLoader />}>
        <Firefly theme={mode} />
        <div className="flex justify-center w-full pt-[64px]">
          <Content />
        </div>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
