import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "../api/axios";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = cookies.accessToken;
    if (storedAuth) {
      setAuth(storedAuth);
    }
  }, [cookies.accessToken]);

  // Contexto de autenticação do login do membro.
  const login_patient = async (email, password, checkbox) => {
    try {
      const response = await axios.post('http://localhost:5432/userlogin', {
        email,
        password,
        checkbox
      });

      const userData = response.data;
      setCookie('accessToken', userData.accessToken, { path: '/' });
      setAuth(userData);

      // Vai levar para a tela inicial do membro.
      navigate('/membro');

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de autenticação do login do especialista.
  const login_expert = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5432/psychlogin', {
        email,
        password
      });

      const userData = response.data;
      setCookie('accessToken', userData.accessToken, { path: '/' });
      setAuth(userData);

      // Vai levar para a tela inicial do especialista.
      navigate('/especialista');

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de autenticação do cadastro do membro.
  const register_patient = async (name, email, password, checkbox) => {
    try {
      const response = await axios.post('http://localhost:5432/user', {
        name,
        email,
        password,
        checkbox
      });

      const userData = response.data;
      setCookie('accessToken', userData.accessToken, { path: '/' });
      setAuth(userData);

      // Vai levar para a tela inicial do membro.
      navigate('/membro');

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de autenticação do cadastro do especialista.
  const register_expert = async (name, email, password, phone, registrationNumber, states, checkbox) => {
    try {
      const response = await axios.post('http://localhost:5432/psych', {
        name,
        email,
        password,
        phone,
        registrationNumber,
        states,
        checkbox
      });

      const userData = response.data;
      setCookie('accessToken', userData.accessToken, { path: '/' });
      setAuth(userData);

      // Vai levar para a tela inicial do especialista.
      navigate('/especialista');

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de autenticação do logout do membro.
  const logout_patient = () => {
    removeCookie('accessToken');
    setAuth(null);
    navigate('/entrar?type=membro');
  };

  // Contexto de autenticação do logout do especialista.
  const logout_expert = () => {
    removeCookie('accessToken');
    setAuth(null);
    navigate('/entrar?type=especialista');
  };

  // Contexto de Esqueceu a senha do membro.
  // const forgot_password_patient = async (email) => {
  //     try {
  //         await axios.post('http://localhost:5173/esqueceu-a-senha?type=membro', {
  //             email,
  //         });
  //         return true;
  //     } catch (error) {
  //         return error.response.data.message;
  //     }
  // };

  // Contexto de Esqueceu a senha do membro.
  const forgot_password_patient = async (email) => {
    try {
      const response = await axios.post('/http://localhost:5173/esqueceu-a-senha-membro', {
        email
      });
      console.log("Solicitando recuperação de senha para o email:", email);

      // const userData = response.data;
      // setCookie('accessToken', userData.accessToken, { path: '/' });
      // setAuth(userData);
      // return true;

      return response.data.success;
    } catch (error) {
      console.error("Erro ao solicitar a recuperação de senha:", error);
      return false;
    }
  };

  // Contexto de Redefinição de senha do membro.
  const reset_password_patient = async (id, token, newPassword) => {
    try {
      const response = await axios.post('/http://localhost:5173/redefinir-a-senha-membro/:id/:token?type=membro', {
        id,
        token,
        newPassword
      });
      console.log("Redefinindo a senha para o id:", id, "com o token:", token, "e a nova senha:", newPassword);

      return response.data.success;
    } catch (error) {
      console.error("Erro ao redefinir a senha:", error);
      return false;
    }
  };

  // Contexto de criação de formulário.
  const createForm = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5432/forms', formData);

      const formId = response.data.id;
      navigate(`/forms/${formId}`);

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de listagem de formulários.
  const getForms = async () => {
    try {
      const response = await axios.get('http://localhost:5432/forms');

      const formsData = response.data;
      setForms(formsData);

      // Vai levar para a tela de listagem de formulários.
      navigate('/forms');

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de detalhes de formulário.
  const getFormById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5432/forms/${id}`);

      const formData = response.data;
      setForm(formData);

      // Vai levar para a tela de detalhes do formulário.
      navigate(`/forms/${id}`);

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de listagem de formulários por filtro.
  const getFormsByFilter = async (filter, value) => {
    try {
      const response = await axios.get(`http://localhost:5432/forms/filter/${filter}/${value}`);

      const formsData = response.data;
      setForms(formsData);

      // Vai levar para a tela de listagem de formulários por filtro.
      navigate(`/forms/filter/${filter}/${value}`);

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de criação de avaliação.
  const createEvaluation = async (evaluationData) => {
    try {
      const response = await axios.post('http://localhost:5432/evaluations', evaluationData);

      const evaluationId = response.data.id;
      navigate(`/evaluations/${evaluationId}`);

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de listagem de avaliações.
  const getEvaluations = async () => {
    try {
      const response = await axios.get('http://localhost:5432/evaluations');

      const evaluationsData = response.data;
      setEvaluations(evaluationsData);

      // Vai levar para a tela de listagem de avaliações.
      navigate('/evaluations');

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de detalhes de avaliação.
  const getEvaluationById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5432/evaluations/${id}`);

      const evaluationData = response.data;
      setEvaluation(evaluationData);

      // Vai levar para a tela de detalhes da avaliação.
      navigate(`/evaluations/${id}`);

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de atualização de avaliação.
  const updateEvaluation = async (id, evaluationData) => {
    try {
      const response = await axios.put(`http://localhost:5432/evaluations/${id}`, evaluationData);

      const evaluationId = response.data.id;
      navigate(`/evaluations/${evaluationId}`);

      return null;
    } catch (error) {
      return error.response.data.message;
    }
  };

  // Contexto de exclusão de avaliação.
  const deleteEvaluation = async (id) => {
  }

  return (
    <AuthContext.Provider value={{ auth, login_patient, login_expert, register_patient, register_expert, logout_patient, logout_expert, forgot_password_patient, reset_password_patient, createForm, getForms, getFormById, getFormsByFilter, createEvaluation, getEvaluations, getEvaluationById, updateEvaluation, deleteEvaluation }}>
      {children}
    </AuthContext.Provider>
  );
};