import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      alert("Preencha todos os campos")
      return;
    } else if (email !== emailConf) {
      alert("Os e-mails não são iguais")
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.ContainerMaster>
      <C.Container>
        <C.Box>
          <C.Form>
            <h1>Cadastre-se</h1>

            <C.InputsContainer>
              <Input
                type="email"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                span="E-mail"
              />
              <Input
                type="email"
                value={emailConf}
                onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                span="Confirme o e-mail"
              />
              <Input
                type="password"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
                span="Senha"
              />
            </C.InputsContainer>

            <Button Text="Inscrever-se" onClick={handleSignup} />

            <C.LinkContainer>
              <p>Já tem uma conta?</p>
              <Link to="/">&nbsp;Fazer Login</Link>
            </C.LinkContainer>
          </C.Form>
        </C.Box>
      </C.Container>
    </C.ContainerMaster>
  );
};

export default Signup;
