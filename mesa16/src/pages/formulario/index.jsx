import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FormularioPage() {
    const { id } = useParams();

    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [curso, setCurso] = useState("");
    const [bimestre, setBimestre] = useState("");

    const navigate = useNavigate();

    async function addAluno() {
        try {
            await axios.post("https://api-aluno.vercel.app/aluno", {
            nome: nome,
            matricula: matricula,
            curso: curso,
            bimestre: bimestre
            });
            alert("Aluno cadastrado com sucesso");
            navigate("/");
        } catch (error) {
            alert("Erro ao tentar cadastrar Aluno");
        }
    }

    async function getAluno(){
        try{
            const response = await axios.get(`https://api-aluno.vercel.app/aluno/${id}`);
            setNome(response.data.nome);
            setMatricula(response.data.matricula);
            setCurso(response.data.curso);
            setBimestre(response.data.bimestre);
        } catch (error) {
            alert("Erro ao tentar pegar dados do Aluno");
        }
    }

    async function editAluno() {    
        try {
            await axios.put(`https://api-aluno.vercel.app/aluno/${id}`, {
                nome: nome,
                matricula: matricula,
                curso: curso,
                bimestre: bimestre
            });
            alert("Aluno editado com sucesso");
            navigate("/");
        } catch (error) {
            alert("Erro ao tentar editar Aluno");
        }
    }

    useEffect(() => {
        if(id !== "nenhum")
            getAluno();
    }, []);

    return (
        <div>
            <Link to="/">voltar</Link>
            <h1>Hello Formulario page</h1>
            <input
                placeholder="Digite o nome"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />
            <input
                placeholder="Digite a matricula"
                type="text"
                value={matricula}
                onChange={(event) => setMatricula(event.target.value)}
            />
            <input
                placeholder="Digite o curso"
                type="text"
                value={curso}
                onChange={(event) => setCurso(event.target.value)}
            />
            <input
                placeholder="Digite o bimestre"
                type="text"
                value={bimestre}
                onChange={(event) => setBimestre(event.target.value)}
            />
            <button onClick={() => id === "nenhum" ? addAluno() : editAluno()}>
                {id === "nenhum" ? "Cadastrar Aluno" : "Editar Aluno"}
            </button>
        </div>
    );
}
