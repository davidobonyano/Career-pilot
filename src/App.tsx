import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import Board from "./pages/Board";

const router = createBrowserRouter([
  { path: "/", element: <Intro /> },
  { path: "/board", element: <Board /> },
  // We can add Contacts and Tasks later
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
