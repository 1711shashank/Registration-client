import React from 'react';

const FormFooter = ({ onSubmit, isFormValid }) => (
    <button
        type="submit"
        className={`form-button ${isFormValid ? '' : 'disabled'}`}
        onClick={onSubmit} disabled={!isFormValid}
    >
        Register
    </button>
);

export default FormFooter;
