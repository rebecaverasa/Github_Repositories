import styled from 'styled-components';

const TableContainer = styled.div`
    padding: 0 200px;
`;

const Table = styled.table`
    width:100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    background-color: #f2f2f2;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
    background-color: #f9f9f9;
    }
`;

const TableHeader = styled.th`
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
    font-family: Arial, sans-serif;
    font-size: 13px;
`;

const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
    font-family: Arial, sans-serif;
    font-size: 13px;
`;

const RepositoriesTable = () => {
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
                    <TableRow>
                        <TableCell>Site_de_alguma_coisa</TableCell>
                        <TableCell>Matheus</TableCell>
                        <TableCell>descricao aqui blablabla</TableCell>
                    </TableRow>
                </tbody>
            </Table>
        </TableContainer>
    );
};

export default RepositoriesTable;