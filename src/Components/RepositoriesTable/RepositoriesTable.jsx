/* eslint-disable react/prop-types */
import { Table } from 'react-bootstrap'

const RepositoriesTable = ({ repositories, handleRowClick}) => {
    return (
        <Table striped bordered hover> 
            <thead>
                <tr>
                    <th>Nome do Repositorio</th>
                    <th>Nome do Proprietário</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {repositories.map((repo) => (
                    <tr key={repo.id} onClick={() => handleRowClick(repo)}>
                        <td>{repo.nome}</td>
                        <td>{repo.proprietario}</td>
                        <td>{repo.descricao}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default RepositoriesTable;