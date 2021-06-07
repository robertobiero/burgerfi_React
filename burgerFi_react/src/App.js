
import Header from './components/header/Header';
import { Fragment } from 'react';
import Meals from './components/meals/Meals'



function App() {
  return (
    <Fragment>
          <Header/>
          <main>
              <Meals/>
          </main>
    </Fragment>
  );
}

export default App;
