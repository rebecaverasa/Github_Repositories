import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../../Graphql/queries';
import { setRepositories } from '../../redux/actions';
import RepositoriesTable from '../RepositoriesTable/RepositoriesTable';

const SearchContainer = styled.div`
    padding: 0 200px;
`;

const Form = styled.form`
    display: flex;
    margin-top: 70px;
    margin-bottom: 27px;
    width: 100%;
`;

const Input = styled.input`
    padding: 6px;
    width: 10%;
    height: 17px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
`;

const Button = styled.button`
    background-color: #6272A4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #F1FA8C;
        color: black;
    }
`;

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchRepositories, { loading, data }] = useLazyQuery(GET_REPOSITORIES);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data && data.search && data.search.nodes) {
            dispatch(setRepositories(data.search.nodes));
        }
    }, [data, dispatch]);

    const handleSearch = () => {
        searchRepositories({ variables: { query: searchTerm } });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    console.log(data);

    return (
        <SearchContainer>
            <Form>
                <Input type="text" placeholder="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress} />
                <Button onClick={handleSearch} disabled={loading}>Buscar</Button>
            </Form>
            {data && data.search && data.search.nodes && (
            <RepositoriesTable repositories={data.search.nodes} />
            )}
        </SearchContainer>
    );
};

export default SearchBar;