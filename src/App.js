import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './component/Main';
import Header from './header/Header';


function App() {
  return (
    <Provider store={store}>
        <Header/>
        <Main/>
    </Provider>
  );
}

export default App;
