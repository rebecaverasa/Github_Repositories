import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/actions";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #f8f8f2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 45px;
  border-radius: 10px;
  position: relative;
  margin: 50px;
`;

const CloseButton = styled.button`
  background-color: #6272a4;
  color: #fff;
  position: absolute;
  border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #F1FA8C;
        color: black;
    }
  top: 10px;
  right: 14px;
  padding: 6px;
`;

const Title = styled.h3`
  margin: 0;
  color: #282a36;
`;

const TitleBackground = styled.div`
  text-align: center;
  background-color: #ddd;
  padding: 17px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TituloNegrito = styled.strong`
  color: #282a36;
  font-weight: bold;
  padding: 7px;
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Modal = () => {
  const dispatch = useDispatch();
  const { modalVisible, modalData } = useSelector((state) => state);
  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  return (
    modalVisible && (
      <ModalBackdrop>
        <ModalContent>
          <CloseButton onClick={handleToggleModal}>Fechar</CloseButton>
          <TitleBackground>
            <Title>Detalhes do Repositório</Title>
          </TitleBackground>
          <p>
            <TituloNegrito>Nome:</TituloNegrito>
            <StyledLink href={modalData.url} target="_blank">
              {modalData.name}
            </StyledLink>
          </p>
          <p>
            <TituloNegrito>Proprietário:</TituloNegrito> {modalData.owner.login}
          </p>
          <p>
            <TituloNegrito>Descrição:</TituloNegrito> {modalData.description}
          </p>
          <p>
            <TituloNegrito>Contagem de estrelas:</TituloNegrito>{" "}
            {modalData.stargazerCount}
          </p>
          <p>
            <TituloNegrito>Estatísticas de Commits:</TituloNegrito>{" "}
            {modalData.defaultBranchRef.target.history.edges.map((edge) => (
              <li key={edge.node.changedFiles}>
                {`${edge.node.changedFiles} arquivos alterados, ${edge.node.additions} adições, ${edge.node.deletions} deleções`}
              </li>
            ))}
          </p>
          <p>
            <TituloNegrito>Últimas 3 Issues:</TituloNegrito>
            {modalData.issues.edges.map((edge) => (
              <li key={edge.node.number}>
                {`${edge.node.number}: ${edge.node.title}`}
              </li>
            ))}
          </p>
          <p>
            <TituloNegrito>Últimos 3 Pull Requests:</TituloNegrito>
            {modalData.pullRequests.edges.map((edge) => (
              <li key={edge.node.url}>
                <StyledLink
                  href={edge.node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {edge.node.title}
                </StyledLink>
                <li>Autor: {edge.node.author.login}</li>
                <li>
                  Criado em: {new Date(edge.node.createdAt).toLocaleString()}
                </li>
                <p></p>
              </li>
            ))}
          </p>
        </ModalContent>
      </ModalBackdrop>
    )
  );
};

export default Modal;
