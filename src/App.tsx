import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routes/routes";

export default function App() {
  const router = createRouter();

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
