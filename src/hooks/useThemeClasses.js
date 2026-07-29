
import { useTheme } from "../context/ThemeContext";

const useThemeClasses = () => {
  const { darkMode } = useTheme();

  return {
    bg: darkMode ? "bg-slate-950" : "bg-white",
    card: darkMode ? "bg-slate-900" : "bg-gray-100",
    text: darkMode ? "text-white" : "text-slate-900",
    subText: darkMode ? "text-gray-300" : "text-gray-600",
    border: darkMode ? "border-slate-700" : "border-gray-300",
  };
};

export default useThemeClasses;s