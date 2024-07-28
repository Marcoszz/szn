import Home from "../screens/Home"

type Route = {
    path: string
    element: () => JSX.Element
}

export const routes: Route[] = [
    {
        path: "/",
        element: Home
    }
]