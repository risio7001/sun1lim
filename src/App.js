import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './component/Main';
import Header from './header/Header';
import Test from './component/Test';


function App() {



  return (
    <Provider store={store}>
        <Header/>
        <Main/>
        {/* <Test/> */}
    </Provider>
  );
}

export default App;
