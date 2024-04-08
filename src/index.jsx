import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.jsx'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
    },
  }),
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
