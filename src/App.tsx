import React from 'react';
import { Search, Result, Header, Footer} from './components';

const App: React.FC = () => {

  return (
    <div className="App">
      <Header />
      <Search />
      <Result />
      <Footer />
    </div>
  );
};

export default App;