import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addCrypto } from "../../services/index";
import CryptoForm from "../../../components/CryptoForm";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { PageWrapper, Title } from "./styles";

export default function AddCryptoPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useMutation(addCrypto, {
    onSuccess: () => {
      queryClient.invalidateQueries("cryptos");
      navigate("/");
    },
    onError: (error) => {
      setErrorMessage("Error al agregar la criptomoneda. Intenta nuevamente.");
      console.error("Error al agregar la criptomoneda:", error);
    },
  });

  return (
    <>
      <Navbar />
      <PageWrapper>
        <Title>Agregar Criptomoneda</Title>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <CryptoForm
          onSubmit={(newCrypto) => {
            mutation.mutate(newCrypto);
          }}
        />
      </PageWrapper>
    </>
  );
}
