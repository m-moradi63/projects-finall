
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react"
import { App } from "./App.tsx";
import React from 'react';
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);