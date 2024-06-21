import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Cart from './components/ShopeeCart'
import './index.css';
export default function App() {
  ReactDOM.render(
    <Provider store={store}>
      <Cart />
    </Provider>,
    document.getElementById('root'))
}




