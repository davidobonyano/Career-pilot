import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import Board from "./pages/Board";
import ErrorElement from "./components/ErrorElement";
import RootLayout from "./layout/RootLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  // Intro page has no RootLayout
  { path: "/", element: <Intro />, errorElement: <ErrorElement /> },

  // All other pages use RootLayout
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      { path: "board", element: <Board /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
