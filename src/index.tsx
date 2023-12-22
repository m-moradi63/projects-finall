
import { createRoot } from "react-dom/client";
import { ReactDOM}  from "react"
import { App } from "./App.tsx";
import React from 'react';

const container = document.getElementById("app") ;
const root = createRoot(container)
root.render(<App/>);