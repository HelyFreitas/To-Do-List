import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      alert("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.ContainerMaster>
      <C.Container>
        <C.Box>
          <C.Form>
            <h1>Faça seu Login</h1>
            <C.InputsContainer>
              <Input
                type="email"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                span="E-mail"
              />
              <Input
                type="password"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
                span="Senha"
              />
            </C.InputsContainer>

            <Button Text="Entrar" onClick={handleLogin} />

            <C.LinkContainer>
              <Link to="/forgot-pass">Esqueceu a senha?</Link>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </C.LinkContainer>
          </C.Form>
        </C.Box>
      </C.Container>
    </C.ContainerMaster>
  );
};

export default Signin;
