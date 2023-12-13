import App from 'pages/App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache,
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
