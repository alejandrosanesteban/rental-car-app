import { Car, Calendar, Heart, Copyright } from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon: Car,
        label: "Cars",
        href: "/dashboard"
    },

    {
        icon: Calendar,
        label: "Cars Reserves",
        href: "/reserves"
    },

    {
        icon: Heart,
        label: "Loved Cars",
        href: "/loved-cars"
    }
]

export const dataAdminSidebar = [
    {
        icon: Copyright,
        label: "Manage your cars",
        href: "/manage"
    },
    {
        icon: Calendar,
        label: "All reserves",
        href: "/all-reserves"
    }
]