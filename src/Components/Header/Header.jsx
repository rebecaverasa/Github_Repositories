import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background-color: #282A36;
    padding: 30px;
`;

const Title = styled.h1`
    text-align: center;
    font-family: Arial, sans-serif;
    color: #F8F8F2;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>Repositórios do Github</Title>
        </HeaderWrapper>
    );
};

export default Header;