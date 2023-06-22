// import { FC } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
        },
        {
            path: "/earth",
            element: <div>Hello earth!</div>,
        },
    ]);

    let myVar: string = "Heee";
    return (<div>
        <RouterProvider router={router} />
    </div>);
}

export default App;