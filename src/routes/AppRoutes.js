import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Categories from "../pages/Category/Category";
import Category from "../pages/Category/Category";
import Product from "../pages/Product/Product";
import Sell from "../pages/Sell/Sell";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Wishlist from "../pages/Wishlist/Wishlist";
import Messages from "../pages/Messages/Messages";
import Orders from "../pages/Orders/Orders";
import Help from "../pages/Help/Help";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/help" element={<Help />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}