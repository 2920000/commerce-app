import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AnnouncemetBar, Footer, Header, Navigation } from "./components";
import { userSelector } from "./features/accountSlice";
import {
  Account,
  CheckoutPage,
  Collection,
  Home,
  NotFoundPage,
  ProductDetail,
  Profile,
  Purchase,
  User,
} from "./pages";
import Login from "./pages/Account/Login/Login";
import Register from "./pages/Account/Register/Register";
function App() {
  const user = useSelector(userSelector);
  return (
    <div>
      <Router>
        <AnnouncemetBar />
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:collection" element={<Collection />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/account" element={<Account />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/user"
            element={user ? <User /> : <Navigate to="/account/login" />}
          >
            <Route path="profile" element={<Profile />} />
            <Route path="purchase" element={<Purchase />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
