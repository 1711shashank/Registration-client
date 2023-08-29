import React, { useState } from 'react';
import './DataTable.css';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SelectField from '../RegistrationForm/SelectField';

const DataTable = ({ data }) => {
    const [selectedYear, setSelectedYear] = useState('');

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = 2000; year <= currentYear; year++) {
        years.push(year);
    }

    const filteredData = selectedYear
        ? data.filter((item) => item.passoutYear === selectedYear)
        : data;

    return (
        <div className="data-table">
            <select
                value={'value'}
                onChange={handleYearChange}
                required
                className='form-input select-year'
            >
                <option value="">Select Batch</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Current Company</th>
                        <th>Mobile Number</th>
                        <th>Connect</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.currentCompany}</td>
                            <td>{item.mobileNumber}</td>
                            <td >
                                {item.linkedInUrl && (
                                    <Link href={item.linkedInUrl} target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon />
                                    </Link>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
