import './App.css';
import Booklist from './componrnts/Booklist';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddBook from './componrnts/AddBook';


const client = new ApolloClient({
  uri: 'http://localhost:4010/graphql'
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
