import './App.css';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <RegistrationForm/>
            <Footer />
        </div>
    );
}

export default App;
