import React from "react";
import { useNavigate } from "react-router-dom";
import { TodoList } from "../../components/TodoList";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <Header />
      <Navbar />
      <h1>Adicione suas tarefas aqui</h1>
      <TodoList />
    </C.Container>
  );
};

export default Home;
