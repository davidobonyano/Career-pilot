import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import Board from "./pages/Board";
import ErrorElement from "./components/ErrorElement";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />, // error inside layout
    children: [
      { index: true, element: <Intro /> },
      { path: "board", element: <Board /> },
      // other pages like contacts, tasks...
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
