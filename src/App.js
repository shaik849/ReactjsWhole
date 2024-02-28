import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import '../index.css'
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./Components/About";
// import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UsersContext from "../utils/UsersContext";


const Contact = lazy(() =>import('./Components/Contact'))


const AppLayout = () => {
    const [userName, setUserName] = useState({});

    useEffect(() => {
        const data = {
            userData : "sanavulla",
            login : "login user"
        }

        setUserName(data);
    }, [])
    
    return (
        <UsersContext.Provider value={{user : userName.userData, login : userName.login}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UsersContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
    element : <AppLayout />,
    children : [
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact-us",
            element: (
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Contact />
                </Suspense>
            ),
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
        },
    ],
    errorElement: <Error />,
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
    <RouterProvider router={appRouter} />
    </React.StrictMode>
)