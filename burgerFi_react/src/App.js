
import Header from './components/header/Header';
import { Fragment } from 'react';
import Meals from './components/meals/Meals'
import CartProvider from './store/CartProvider';



function App() {
    return (
      <CartProvider>
    <Fragment>
          <Header/>
          <main>
              <Meals/>
          </main>
            </Fragment>
        </CartProvider>
  );
}

export default App;
