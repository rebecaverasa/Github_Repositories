/* eslint-disable no-undef */
import Header from "./Components/Header/Header"
import SearchBar from "./Components/SearchBar/SearchBar";
import RepositoriesTable from "./Components/RepositoriesTable/RepositoriesTable";

const App = () => {

  //Função para lidar com a pesquisa
  const handleSearch = (query) => {
    setSearchQuery(query);
  //Lógica para realizar a pesquisa no GitHub
  };

  //Função para lidar com o clique em uma linha da tabela
  const handleRowClick = (repo) => {
    setSelectedRepo(repo);
    setShowModal(true);
  };

  //Simulação de dados de repositórios
  const repositories = [
    { id: 1, name: 'Repo 1', owner: 'Owner 1', description: 'Descrição 1' },
    { id: 2, name: 'Repo 2', owner: 'Owner 2', description: 'Descrição 2' },
  //Adicione mais repositórios conforme necessário
  ];

  return (
    <div>
      <Header />
      <SearchBar />
      <RepositoriesTable repositories={repositories} handleRowClick={handleRowClick} />
    </div>
  );
};

export default App;
