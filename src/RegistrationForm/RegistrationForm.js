import React, { useReducer } from 'react';
import './RegistrationForm.css';
import FormFooter from './FormFooter';
import FieldInput from './FieldInput';
import SelectField from './SelectField';
import axios from 'axios';

const initialState = {
    name: '',
    email: '',
    passoutYear: '',
    mobileNumber: '',
    currentCompany: '',
    linkedInUrl: '',
    nameTouched: false,
    emailTouched: false,
    passoutYearTouched: false,
    mobileNumberTouched: false,
    currentCompanyTouched: false,
    linkedinUrlTouched: false
};


const formReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, [action.name]: action.value, [`${action.name}Touched`]: true };
        default:
            return state;
    }
};


const RegistrationForm = () => {

    const [formData, dispatch] = useReducer(formReducer, initialState);


    const isNameValid = formData.name.trim() !== '';
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isMobileNumberValid = /^\d{10}$/.test(formData.mobileNumber);
    const isCurrentCompanyValid = formData.currentCompany.trim() !== '';
    const isLinkedinUrlValid = formData.linkedInUrl.trim() !== '';


    const isFormValid = isNameValid && isEmailValid && isMobileNumberValid && isLinkedinUrlValid && isCurrentCompanyValid;


    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', name, value });
    };

    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 2000; year <= currentYear; year++) {
        years.push(year);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: formData.name,
            email: formData.email,
            passoutYear: formData.passoutYear,
            mobileNumber: formData.mobileNumber,
            linkedInUrl: formData.linkedInUrl,
            currentCompany: formData.currentCompany
        }

        console.log(data);

        const response = await axios.post(`http://localhost:5000/addData`, data);
        console.log(response);


        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Passout Year:', formData.passoutYear);
        console.log('Mobile Number:', formData.mobileNumber);
        console.log('Current Company:', formData.currentCompany);
    };

    return (
        <>
            <div className='RegistrationForm'>
                <div className="form-container">
                    <div className="form-Head">
                        <h2 className="form-title">Alumni Registration Form </h2>
                        <p className="form-subtitle"> Register below if you are a new user.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="form">
                        <FieldInput
                            label="Name"
                            name="name"
                            type="text"
                            value={formData.name}
                            touched={formData.nameTouched}
                            valid={isNameValid}
                            onChange={handleChange}
                        />

                        <FieldInput
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            touched={formData.emailTouched}
                            valid={isEmailValid}
                            onChange={handleChange}
                        />

                        <SelectField
                            label="Year of Passing"
                            name="passoutYear"
                            value={formData.passoutYear}
                            touched={formData.passoutYearTouched}
                            valid={formData.passoutYear !== ''}
                            options={years}
                            onChange={handleChange}
                        />

                        <FieldInput
                            label="Mobile Number"
                            name="mobileNumber"
                            type="text"
                            value={formData.mobileNumber}
                            touched={formData.mobileNumberTouched}
                            valid={isMobileNumberValid}
                            onChange={handleChange}
                        />

                        <FieldInput
                            label="LinkedIn Profile URL"
                            name="linkedInUrl"
                            type="text"
                            value={formData.linkedInUrl}
                            touched={formData.linkedinUrlTouched}
                            valid={isLinkedinUrlValid}
                            onChange={handleChange}
                        />


                        <FieldInput
                            label="Current Company"
                            name="currentCompany"
                            type="text"
                            value={formData.currentCompany}
                            touched={formData.currentCompanyTouched}
                            valid={isCurrentCompanyValid}
                            onChange={handleChange}
                        />

                        <FormFooter onSubmit={handleSubmit} isFormValid={isFormValid} />
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
