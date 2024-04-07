/* eslint-disable no-undef */
import Header from "./Components/Header/Header"
import SearchBar from "./Components/SearchBar/SearchBar";
import RepositoriesTable from "./Components/RepositoriesTable/RepositoriesTable";

const App = () => {

  return (
    <div>
      <Header />
      <SearchBar />
      <RepositoriesTable />
    </div>
  );
};

export default App;
