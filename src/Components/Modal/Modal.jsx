import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/actions';

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
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
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
                    {/* Aqui você pode renderizar o conteúdo do modal usando os dados recebidos do estado */}
                    <h3>Detalhes do Repositório</h3>
                    <p>Nome: {modalData.name}</p>
                    <p>Proprietário: {modalData.owner.login}</p>
                    <p>Descrição: {modalData.description}</p>
                    <p>Contagem de estrelas: {modalData.stargazerCount}</p>
                    <p>Url: {modalData.url}</p>
                    <p>Estatísticas de Commits: {modalData.defaultBranchRef.target.history.edges.map(edge => (
                        <li key={edge.node.changedFiles}>
                            {`${edge.node.changedFiles} arquivos alterados, ${edge.node.additions} adições, ${edge.node.deletions} deleções`}
                        </li>
                    ))}
                    </p>
                    <p>Issues Abertas: {modalData.labels}</p>
                    <p>Pull Requests: {modalData.CommitHistoryConnection}</p>
                </ModalContent>
            </ModalBackdrop>
        )
    );
};

export default Modal;
