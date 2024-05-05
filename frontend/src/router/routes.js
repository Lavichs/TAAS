import {
    AUTHORIZATION_ROUT,
    BOOKINGS_ROUTE,
    CATALOG_ROUTE,
    CREATE_TOUR,
    DISCOUNTS_ROUTE,
    MAIN_ROUTE,
    NOT_FOUND
} from "../consts";
import Catalog from "../pages/Catalog";
import Bookings from "../pages/Bookings";
import Discounts from "../pages/Discounts";
import TourEditor from "../pages/TourEditor";
import NotFoundPage from "../pages/NotFoundPage";
import Authorization from "../pages/Authorization";
import MainPage from "../pages/MainPage";


export const privateRoutes = [
    {path: CATALOG_ROUTE, Component: Catalog},
    {path: BOOKINGS_ROUTE, Component: Bookings},
]
export const adminRoutes = [
    {path: CREATE_TOUR, Component: TourEditor},
    {path: DISCOUNTS_ROUTE, Component: Discounts},
]
export const publicRoutes = [
    {path: MAIN_ROUTE, Component: MainPage},
    {path: AUTHORIZATION_ROUT, Component: Authorization},
    {path: NOT_FOUND, Component: NotFoundPage},
]