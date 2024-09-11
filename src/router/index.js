import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import HomePage from "../pages/home";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import AddCryptoPage from "../pages/crypto/add";
import EditCryptoPage from "../pages/crypto/edit";

const queryClient = new QueryClient();

export default function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/crypto/add" element={<AddCryptoPage />} />
            <Route path="/crypto/edit/:id" element={<EditCryptoPage />} />
          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
