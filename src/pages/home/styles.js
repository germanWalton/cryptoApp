import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7875;
  }
`;

export const EditLink = styled(Link)`
  color: #a5a5a5;
  text-decoration: none;
  font-size: 14px;
  margin-left: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #40a9ff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: "Arial", sans-serif;
  color: #333;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 800px;
`;

export const ListItem = styled.li`
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #457b9d;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d3557;
  }
`;
