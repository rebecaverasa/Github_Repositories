import styled from 'styled-components'

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
    return (
        <SearchContainer>
            <Form>
                <Input type="text" placeholder="search" />
                <Button>Buscar</Button>
            </Form>
        </SearchContainer>
    );
};

export default SearchBar;