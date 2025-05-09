import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Login from "./Login.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/ebelle" element={<App />} />
        <Route path="ebelle/login" element={<Login />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
