import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import CryptoForm from "../../../components/CryptoForm";
import Navbar from "../../../components/Navbar";
import { listCryptos, updateCrypto } from "../../services/index";
import { PageWrapper, Title } from "./styles";

export default function EditCryptoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState("");

  const { data: cryptos, isLoading, error } = useQuery("cryptos", listCryptos);

  const crypto = cryptos.find((crypto) => crypto.id === parseInt(id));

  const mutation = useMutation((updatedCrypto) => updateCrypto(+id, updatedCrypto), {
    onSuccess: () => {
      queryClient.invalidateQueries("cryptos");
      navigate("/");
    },
    onError: (error) => {
      setErrorMessage("Error al editar la criptomoneda. Intenta nuevamente.");
      console.error("Error al editar la criptomoneda:", error);
    },
  });

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar las criptomonedas</div>;

  return (
    <>
      <Navbar />
      <PageWrapper>
        <Title>Editar Criptomoneda</Title>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <CryptoForm
          initialData={crypto}
          onSubmit={(updatedCrypto) => {
            mutation.mutate(updatedCrypto);
          }}
        />
      </PageWrapper>
    </>
  );
}
