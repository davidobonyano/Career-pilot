import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import Board from "./pages/Board";
import ErrorElement from "./components/ErrorElement";
import RootLayout from "./layout/RootLayout";
import NotFound from "./pages/NotFound"; // NEW

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Intro /> },
      { path: "board", element: <Board /> },
      { path: "*", element: <NotFound /> }, // NEW
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
