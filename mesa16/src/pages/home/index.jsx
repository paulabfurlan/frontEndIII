import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [alunos, setAlunos] = useState([]);

    const navigate = useNavigate();

    async function getAlunos() {
        try {
          const response = await axios.get("https://api-aluno.vercel.app/aluno");
          setAlunos(response.data);
        } catch (error) {
          alert("Erro ao buscar dados");
        }
    }

    async function deleteAluno(id) {
        try {
          await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`);
          getAlunos();
          alert("Aluno Apagado");
        } catch (error) {
          alert("Erro ao tentar remover Aluno");
        }
      }

    useEffect(() => {
        getAlunos();
      }, []);
  
    return (
      <div className={{}}>
            <h1>Hello home page</h1>
            <button onClick={() => navigate("/formulario/nenhum")}>
                Cadastrar novo aluno
            </button>
            <ul>
                {alunos.map((aluno) => (
                    <li
                        key={aluno._id}
                        style={{ border: "1px solid #999", marginBottom: 5 }}
                    >
                        <h3>{aluno.nome}</h3>
                        <p>{aluno.matricula}</p>
                        <p>{aluno.curso}</p>
                        <p>{aluno.bimestre}</p>
                        <button onClick={() => deleteAluno(aluno._id)}>Apagar</button>
                        <button onClick={() => navigate(`/formulario/${aluno._id}`)}>Editar</button>
                    </li>
                ))}
            </ul>
      </div>
    );
}
