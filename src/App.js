import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./layouts/Main";
import { Error } from "./components/Error/Error";
import { Topic } from "./components/Topic/Topic";
import { Quiz } from "./components/Quiz/Quiz";
import { Statistics } from "./components/Statistics/Statistics";

function App() {
  const topicsLoader = () =>
    fetch("https://openapi.programming-hero.com/api/quiz");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Topic />, loader: topicsLoader },
        { path: "/topics", element: <Topic />, loader: topicsLoader },
        {
          path: "/topics/:topicId",
          element: <Quiz />,
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            ),
        },
        {
          path: "/statistics",
          element: <Statistics />,
          loader: topicsLoader,
        },
        { path: "/blog", element: <div /> },
      ],
    },
  ]);
  return (
    <div className="bg-base-300 min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
