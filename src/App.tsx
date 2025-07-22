import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import Board from "./pages/Board";
import Contacts from "./pages/Contacts"; // <-- Add this
import ErrorElement from "./components/ErrorElement";
import RootLayout from "./layout/RootLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Intro />, errorElement: <ErrorElement /> },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      { path: "board", element: <Board /> },
      { path: "contacts", element: <Contacts /> }, // <-- Add this
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
