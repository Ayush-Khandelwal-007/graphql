import './App.css';
import Booklist from './componrnts/Booklist';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ApolloProvider } from 'react-apollo';
import AddBook from './componrnts/AddBook';


const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'http://localhost:4010/',
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Books Record</h2>
        <div className="RederScreen">
          <Booklist />
          <AddBook />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
