import React, { useEffect, useState } from 'react';
import './DataTable.css';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import axios from 'axios';
import RecordImg from '../../images/table.svg';
import { getFilteredData, getYears } from '../helperFunction/helperFunction';

const DataTable = ({ dummyData }) => {

    const [data, setData] = useState(dummyData);
    const [selectedYear, setSelectedYear] = useState('');

    const fetchData = async () => {
        const response = await axios.get('http://localhost:5000/getData');
        console.log(response.data.profileData);
        setData(response.data.profileData);
    }


    useEffect(() => {
        fetchData();
    }, [])

    const years = getYears();
    const filteredData = getFilteredData(selectedYear, data);


    return (
        <div className="data-table">

            <select onChange={(e) => setSelectedYear(e.target.value)} className='form-input select-year' >
                <option className="option" value="">Select Batch</option>
                {years.map((item, index) => (
                    <option className="option" key={index}>{item}</option>
                ))}
            </select>

            {
                filteredData.length === 0
                    ?
                    <div className='noRecordFound-wrapper'>
                        <p>No Record Found</p>
                        <img src={RecordImg} alt='' />
                    </div>
                    :

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
            }

        </div>
    );
};

export default DataTable;
