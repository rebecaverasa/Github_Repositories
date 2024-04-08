// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/actions';

const TableContainer = styled.div`
    padding: 0 200px;
`;

const Table = styled.table`
    width:100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    background-color: #f2f2f2;
    color: #282A36;
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
    background-color: #F1FA8C;
  }
`;

const RepositoriesTable = () => {
    const { repositories } = useSelector(state => state)
    const dispatch = useDispatch();
    const handleRowClick = (repo) => {
        dispatch(toggleModal(repo));
    };

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
                    {repositories.length > 0 ? (
                        repositories.map((repo) => (
                            <TableRowClickable key={repo.name} onClick={() => handleRowClick(repo)}>
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
        </TableContainer>
    );
};

export default RepositoriesTable;