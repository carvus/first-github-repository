import DaysAndHours from "./components/DaysAndHours";
import Forms from "./pages/Forms";
import Users from "./components/Users";
import About from "./pages/About";
import Home from "./pages/Home";
import HOCTest from "./components/HOCTest";

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
    },
    {
        path: "/hocTest",
        component: HOCTest
    }
]

export const redirects = [
    {
        from: "/main",
        to: "/"
    }
]