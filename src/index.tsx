import ReactDOM from "react-dom/client";
import { Plot } from "./plot";

// Render the App
window.document.addEventListener("DOMContentLoaded", () => {
  const root = window.document.getElementById("root");
  ReactDOM.createRoot(root).render(<Plot />);
});
