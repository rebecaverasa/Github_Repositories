import { createGlobalStyle } from 'styled-components';
import Header from "./Components/Header/Header"
import SearchBar from "./Components/SearchBar/SearchBar";
import RepositoriesTable from './Components/RepositoriesTable/RepositoriesTable';

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
    </div>
  );
};

export default App;
