import {BOOKINGS_ROUTE, CATALOG_ROUTE, CREATE_TOUR, DISCOUNTS_ROUTE, NOT_FOUND} from "../consts";
import Catalog from "../pages/Catalog";
import Bookings from "../pages/Bookings";
import Discounts from "../pages/Discounts";
import TourEditor from "../pages/TourEditor";
import NotFoundPage from "../pages/NotFoundPage";


export const privateRoutes = [
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: BOOKINGS_ROUTE,
        Component: Bookings
    },
    {
        path: DISCOUNTS_ROUTE,
        Component: Discounts
    },
    {
        path: CREATE_TOUR,
        Component: TourEditor
    },
    {
        path: NOT_FOUND,
        Component: NotFoundPage
    },
]