import React, { useState } from 'react';
import './EmailTable.css';

function EmailTable({ data, onEmailClick }) { // Accept the onEmailClick prop
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter data based on searchTerm
    const filteredData = data.filter(
        item =>
            item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="email-table">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                className="form-control mb-3"
            />
            <table className="table">
                {/* <thead>
                </thead> */}
                <tbody>
                    {filteredData.map((item, index) => ( // Use filteredData here
                        <tr key={index} onClick={() => onEmailClick(item)}> {/* Add the click handler */}
                            <td>
                                <input type="checkbox" className="form-check-input mt-3" />
                            </td>
                            <td>
                                <div className='container'>
                                    <div className='row fw-bold'>
                                        {item.subject}
                                    </div>
                                    <div className='row fw-lighter'>
                                        {item.body}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmailTable;
