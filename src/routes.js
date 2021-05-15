import DaysAndHours from "./components/DaysAndHours";
import Forms from "./components/Forms";
import Users from "./components/Users";
import About from "./pages/About";
import Home from "./pages/Home";

export const routes = [
    {
        path: "/",
        isExact: true,
        component: Home
    },
    {
        path: "/main/about",
        component: About
    },
    {
        path: "/urishej",
        component: DaysAndHours
    },
    {
        path: "/users",
        component: Users
    },
    {
        path: "/forms",
        component: Forms
    }
]

export const redirects = [
    {
        from: "/main",
        to: "/"
    }
]