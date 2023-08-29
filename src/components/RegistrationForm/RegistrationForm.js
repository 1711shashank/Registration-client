import React, { useReducer } from 'react';
import './RegistrationForm.css';
import FormFooter from './FormFooter';
import FieldInput from './FieldInput';
import SelectField from './SelectField';

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


    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', name, value });
    };

    const years = [];
    const currentYear = new Date().getFullYear();
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



        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Passout Year:', formData.passoutYear);
        console.log('Mobile Number:', formData.mobileNumber);
        console.log('Current Company:', formData.currentCompany);
    };

    return (
        <>
            <div className='registrationForm'>
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
                            onChange={handleChange}
                        />

                        <FieldInput
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            touched={formData.emailTouched}
                            onChange={handleChange}
                        />

                        <SelectField
                            label="Year of Passing"
                            name="passoutYear"
                            value={formData.passoutYear}
                            touched={formData.passoutYearTouched}
                            options={years}
                            onChange={handleChange}
                        />

                        <FieldInput
                            label="Mobile Number"
                            name="mobileNumber"
                            type="text"
                            value={formData.mobileNumber}
                            touched={formData.mobileNumberTouched}
                            onChange={handleChange}
                        />

                        <FieldInput
                            label="LinkedIn Profile URL"
                            name="linkedInUrl"
                            type="text"
                            value={formData.linkedInUrl}
                            touched={formData.linkedinUrlTouched}
                            onChange={handleChange}
                        />


                        <FieldInput
                            label="Current Company"
                            name="currentCompany"
                            type="text"
                            value={formData.currentCompany}
                            touched={formData.currentCompanyTouched}
                            onChange={handleChange}
                        />

                        <FormFooter onSubmit={handleSubmit} />
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
