import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { MeuForm } from "../pages/MeuForm";
import { NotFound } from "../pages/NotFound";
import { Users } from "../pages/Users";
import { Footer } from "../components/Footer";
import UserContextProvider from "../contexts/UserContext";

export function RouteList() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MeuForm />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}
