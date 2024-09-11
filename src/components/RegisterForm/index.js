import { useState } from "react";
import {
  FormWrapper,
  Form,
  Title,
  Input,
  Button,
  ErrorMessage,
  LinkText,
  FooterText,
} from "./styles";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (!formData.username) formErrors.username = "El nombre de usuario es obligatorio";
    if (!formData.email) formErrors.email = "El email es obligatorio";
    if (!formData.password) formErrors.password = "La contraseña es obligatoria";
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Las contraseñas no coinciden";
    }
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
        <Title>Registro</Title>

        <Input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}

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

        <Input
          type="password"
          name="confirmPassword"
          placeholder="Repetir contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

        <Button type="submit">Registrarse</Button>
        <FooterText>
          ¿Ya tienes cuenta? <LinkText to="/auth/login">Inicia sesión</LinkText>
        </FooterText>
      </Form>
    </FormWrapper>
  );
}
