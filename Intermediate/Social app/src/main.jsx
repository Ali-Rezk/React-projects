import "@fortawesome/fontawesome-free/css/all.min.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/auth.context.jsx";
import ModeContextProvider from "./context/mode.context.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <ModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ModeContextProvider>
  </QueryClientProvider>
);
