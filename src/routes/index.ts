import { lazy } from 'react';
import { externalRoute } from './DistinctRoute/External';
import { internalRoute } from './DistinctRoute/Internal';

const Home = lazy(() => import("../core/Public/components/Home"));
const Cart = lazy(() => import("../core/Public/components/Cart"));

const Boundary = lazy(() => import("../core/Protected/Boundary"));


export const appRoutes: CustomRoute[] = [
    {
        path: "/cart",
        component: Cart,
        type: "unauthorized"
    },
    {
        path: "/",
        component: Home,
        type: "unauthorized",
    },
    
    // {
    //     path: "/",
    //     component: Boundary,
    //     children: [...internalRoute, ...externalRoute],
    // }
]
