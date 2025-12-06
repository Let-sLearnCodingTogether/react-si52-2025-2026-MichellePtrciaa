import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : "/", //alamat dari sebuah page
        children : [
            {
                index : true,
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/movies/Movies.tsx")
                        return component.default
                    }
                }
            },
            {
                path : "signUp",
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/auth/signUp/signUp.tsx")
                        return component.default
                    }
                }
            },
             {
                path : "signIn",
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/auth/signIn/signIn.tsx")
                        return component.default
                    }
                }
            },
            {
                path : "/movie",
                lazy : {
                    Component : async () => {
                        const component = await import("../pages/movies/Movies.tsx")
                        return component.default
                    }
                }
            },
            {
                path : "add-movie",
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/movies/AddMovie.tsx")
                        return component.default
                    }
                }
            },
        ]
    }
])

export default router