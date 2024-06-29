import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import Login from "./components/Auth/pages/Login";
import Register from "./components/Auth/pages/Register";
import Profile from "./components/Auth/userProfile/Profile.tsx";
import Home from "./Pages/Home.tsx";
import NotFound from "./components/NotFound.tsx";
import Products from "@/Pages/ProductPage/Products.tsx";
import AddProduct from "@/Pages/ProductPage/AddProduct.tsx";
import Pets from "@/Pages/Pets/Pets.tsx";
import PetDetails from "@/Pages/Pets/PetDetails.tsx";
import AdoptPet from "@/Pages/Pets/AdoptPet.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./Pages/ProductPage/ProductDetails.tsx";
import Blogs from "./Pages/Blogs/Blogs.tsx";
import Blog from "./Pages/Blogs/BlogDetails.tsx";
import NewBlog from "./Pages/Blogs/AddBlog.tsx";
import EditBlog from "./Pages/Blogs/EditBlog.tsx";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element with id 'root' not found.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/register"
                                element={<Register />}
                            />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/products" element={<Products />} />
                            <Route
                                path="/products/add"
                                element={<AddProduct />}
                            />
                            <Route path="/blogs" element={<Blogs />} />
                            <Route path="/blogs/:id" element={<Blog />} />
                            <Route path="/blogs/add" element={<NewBlog />} />
                            <Route
                                path="/blogs/edit/:id"
                                element={<EditBlog />}
                            />
                            <Route path="/pets" element={<Pets />} />
                            <Route
                                path="/pets/getDetails/:id"
                                element={<PetDetails />}
                            />
                            <Route
                                path="/adoption/user/dataform/:id"
                                element={<AdoptPet />}
                            />
                            <Route
                                path="/products/getDetails/:id"
                                element={<ProductDetails />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
);
