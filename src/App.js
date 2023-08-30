import './App.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import DataTable from './components/DataTable/DataTable';
import { Route, Routes } from "react-router-dom";



function App() {


    const dummyData = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            passoutYear: '2021',
            mobileNumber: '1234567890',
            linkedInUrl: 'https://www.linkedin.com/in/johndoe',
            currentCompany: 'ABC Inc. skhj klhsesf kjhs o oiwr els skl slk jsak jasdkl jsaalf eslkf j',
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            passoutYear: '2022',
            mobileNumber: '9876543210',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith',
            currentCompany: 'XYZ Corp.',
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            passoutYear: '2022',
            mobileNumber: '9876543210',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith',
            currentCompany: 'XYZ Corp.',
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            passoutYear: '2022',
            mobileNumber: '9876543210',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith',
            currentCompany: 'XYZ Corp.',
        },
    ];

    return (
        <div className="App">
            <Header />
            <Navbar />
            <Routes >

                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/" element={<DataTable dummyData={dummyData} />} />

            </Routes>
            <Footer />
        </div>
    );
}

export default App;
