import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://api-cartas-brl9m4ud4-klebermaycs-projects.vercel.app/sigin", {
        email,
        password,
      });
      // Armazenar o token de autenticação no localStorage ou em um cookie
      localStorage.setItem("authToken", response.data.token);
      // Após a autenticação bem-sucedida, redirecione o usuário para o dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
