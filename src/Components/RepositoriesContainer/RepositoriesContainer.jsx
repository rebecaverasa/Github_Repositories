// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import RepositoriesTable from './RepositoriesTable';

const RepositoriesContainer = () => {
  const repositories = useSelector((state) => state.repositories);

  return (
    <RepositoriesTable repositories={repositories} />
  );
};

export default RepositoriesContainer;