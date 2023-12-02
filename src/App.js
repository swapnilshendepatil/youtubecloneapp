import React from "react";
import Head from "./Components/Head";
import Body from "./Components/Body";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watchpage from "./Components/Watchpage";
import Demo from "./Components/Demo";

const queryClient = new QueryClient();

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
