import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import IndexProduct from "../pages/Admin/Products/IndexProduct/IndexProduct";
import UpdateProduct from "../pages/Admin/Products/UpdateProduct/UpdateProduct";

// tạo mảng chứa router
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },

    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
    },

    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true,
    },

    {
        path: '/product/:id',
        page: ProductDetailsPage,
        isShowHeader: true,
    },

    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true,
    },

    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true,
    },

    {
        path: '/admin/products',
        page: IndexProduct,
        isShowHeader: true,
    },

    {
        path: '/admin/products/detail/:id',
        page: UpdateProduct,
        isShowHeader: true,
    },

    {
        path: '/*',
        page: NotFoundPage,
    },
];