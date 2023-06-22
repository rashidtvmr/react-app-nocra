// import { FC } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import './style.css'

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
        },
        {
            path: "/earth",
            element: <div className="red">Hello earth!</div>,
        },
    ]);

    let myVar: string = "Heee";
    return (<div>
        <RouterProvider router={router} />
    </div>);
}

export default App;