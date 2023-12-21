
import { createRoot } from "react-dom/client";
import {React , ReactDOM}  from "react"
import { App } from "./App.tsx";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);