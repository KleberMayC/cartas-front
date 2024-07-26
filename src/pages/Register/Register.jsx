import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("https://cartas-app.onrender.com/signup", {
        email,
        password,
        username,
        name,
      });
      navigate("/login");
      console.log("Registrando usuário:", { email, password, username });
      navigate("/login");
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default Register;
