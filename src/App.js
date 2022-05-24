import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './component/Main';
import Header from './header/Header';
import Test from './component/Test';
import Footer from './component/Footer';


function App() {



  return (
    <Provider store={store}>
        <Header/>
        <Main/>
        {/* <Test/> */}
        <Footer/>
    </Provider>
  );
}

export default App;
