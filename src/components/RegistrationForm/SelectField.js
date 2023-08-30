import React from 'react';

const SelectField = ({ label, name, value, touched, valid, options, onChange }) => (
    <div className="form-group">
        <label htmlFor={name} className="form-label">
            {label}:
        </label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required
            className={`form-input ${!touched ? 'default' : valid ? 'valid' : 'invalid'}`}
        >
            <option className="option" value="">Select Year</option>
            {options.map((year) => (
                <option className="option" key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>


    </div>
);

export default SelectField;


