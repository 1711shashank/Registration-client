import React from 'react';

const FieldInput = ({ label, name, type, value, touched, valid, onChange }) => (
    <div className="form-group">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            className={`form-input ${!touched ? 'default' : valid ? 'valid' : 'invalid'}`}
            value={value}
            onChange={onChange}
            onClick={onChange}
        />
    </div>
);

export default FieldInput;
