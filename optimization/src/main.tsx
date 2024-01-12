import ReactDOM from "react-dom/client";
import "./index.css";

import OptimizedApp from "./OptimizedApp";
import { ExpensiveComponent } from "./ExpensiveComponent";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <OptimizedApp>
        <ExpensiveComponent />
    </OptimizedApp>
);
