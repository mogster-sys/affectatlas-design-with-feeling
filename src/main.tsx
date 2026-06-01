import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/affectatlas-tokens.css"; // real per-emotion MD3 tokens (data-emotion="x")

createRoot(document.getElementById("root")!).render(<App />);
