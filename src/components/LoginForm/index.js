import { useState } from "react";
import { FormWrapper, Form, Title, Input, Button, ErrorMessage, FooterText, LinkText } from "./styles";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = "El email es obligatorio";
    if (!formData.password) formErrors.password = "La contraseña es obligatoria";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Formulario enviado:", formData);
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Iniciar sesión</Title>

        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

        <Button type="submit">Ingresar</Button>
        <FooterText>
          ¿No tienes cuenta? <LinkText to="/auth/register">Regístrate</LinkText>
        </FooterText>
      </Form>
    </FormWrapper>
  );
}
