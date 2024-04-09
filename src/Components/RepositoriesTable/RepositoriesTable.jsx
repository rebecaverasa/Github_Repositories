import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/actions";

const TableContainer = styled.div`
  padding: 0 200px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
  color: #282a36;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  width: 33.33%;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  font-family: Arial, sans-serif;
  font-size: 13px;
`;

const TableCell = styled.td`
  width: 33.33%;
  padding: 10px;
  border: 1px solid #ddd;
  font-family: Arial, sans-serif;
  font-size: 13px;
`;

const CenteredCell = styled(TableCell)`
  text-align: center;
  color: #808080;
`;

const TableRowClickable = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #f1fa8c;
  }
`;

const Button = styled.button`
    background-color: #6272A4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 8px;
    margin-top: 30px;
    margin-right: 10px;
    margin-left: 10px;
    &:hover {
        background-color: #F1FA8C;
        color: black;
    }
`;

const PageSize = 10;

const RepositoriesTable = () => {
    const dispatch = useDispatch();
    const { repositories } = useSelector((state) => state);
    const [currentPage, setCurrentPage] = useState(1);

    const handleRowClick = (repo) => {
        dispatch(toggleModal(repo));
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [repositories]);

    const totalPages = Math.ceil(repositories.length / PageSize);

    const paginatedData = repositories.slice(
        (currentPage - 1) * PageSize,
        currentPage * PageSize
    );

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Nome do Repositorio</TableHeader>
                        <TableHeader>Nome do Proprietário</TableHeader>
                        <TableHeader>Descrição</TableHeader>
                    </TableRow>
                </TableHead>
                <tbody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((repo) => (
                            <TableRowClickable
                                key={repo.name}
                                onClick={() => handleRowClick(repo)}
                            >
                                <TableCell>{repo.name}</TableCell>
                                <TableCell>{repo.owner.login}</TableCell>
                                <TableCell>{repo.description}</TableCell>
                            </TableRowClickable>
                        ))
                    ) : (
                        <TableRow>
                            <CenteredCell colSpan="3">Nenhum repositório</CenteredCell>
                        </TableRow>
                    )}
                </tbody>
            </Table>
            <div>
                <Button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </Button>
                <span>
                    {currentPage} de {totalPages}
                </span>
                <Button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Próxima
                </Button>
            </div>
        </TableContainer>
    );
};

export default RepositoriesTable;
