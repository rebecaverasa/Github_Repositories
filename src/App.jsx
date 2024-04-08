import { createGlobalStyle } from 'styled-components';
import Header from "./Components/Header/Header"
import SearchBar from "./Components/SearchBar/SearchBar";
import RepositoriesTable from './Components/RepositoriesTable/RepositoriesTable';
import Modal from './Components/Modal/Modal';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #F8F8F2;
  }
`;

const App = () => {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <RepositoriesTable />
      <Modal />
    </div>
  );
};

export default App;
