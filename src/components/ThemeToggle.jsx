import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(()=>{
       const storedTheme = localStorage.getItem("theme") 
       if (storedTheme === "light") {
        setIsDarkMode(false)
        document.documentElement.classList.remove("dark");
       } else {
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
       }
    },[])

    const toggleTheme = ()=>{
       if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false)
       }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark")
        setIsDarkMode(true)
       }
    }
  return (
    <button onClick={toggleTheme} className={cn("p-2 rounded-full transition-colors duration-300",
       "focus:outline-hidden hover:bg-secondary/50" 
    )}>
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" /> 
      ) : (
        <Moon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
}

export default ThemeToggle