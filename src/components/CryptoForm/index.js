import { useState } from "react";
import { Button, Input, FormWrapper, Form, Label } from "./styles";

export default function CryptoForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState(initialData || { name: "", symbol: "", price: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Nombre:
          <Input name="name" value={formData.name} onChange={handleChange} required />
        </Label>
        <Label>
          Símbolo:
          <Input name="symbol" value={formData.symbol} onChange={handleChange} required />
        </Label>
        <Label>
          Precio:
          <Input name="price" value={formData.price} onChange={handleChange} required />
        </Label>
        <Button type="submit">Guardar</Button>
      </Form>
    </FormWrapper>
  );
}
