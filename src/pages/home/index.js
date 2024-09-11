import { useMutation, useQuery, useQueryClient } from "react-query";
import Navbar from "../../components/Navbar";
import { deleteCrypto, listCryptos } from "../services/index";
import { AddLink, Button, Container, EditLink, List, ListItem, Title } from "./styles";

export default function HomePage() {
  const { data: cryptos, isLoading, error } = useQuery("cryptos", listCryptos);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation((id) => deleteCrypto(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("cryptos");
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta criptomoneda?")) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar las criptomonedas</div>;

  return (
    <>
      <Navbar />
      <Container>
        <Title>CriptoApp</Title>
        <List>
          {cryptos.map((crypto) => (
            <ListItem key={crypto.id}>
              {crypto.name} ({crypto.symbol}) - ${crypto.price}
              <div>
                <EditLink to={`/crypto/edit/${crypto.id}`}>Editar</EditLink>
                <Button onClick={() => handleDelete(crypto.id)}>Eliminar</Button>
              </div>
            </ListItem>
          ))}
        </List>
        <AddLink to="/crypto/add">Agregar Nueva Criptomoneda</AddLink>
      </Container>
    </>
  );
}
