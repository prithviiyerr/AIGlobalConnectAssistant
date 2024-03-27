import React, { useState } from 'react';
import './EmailTable.css';

function EmailTable({ data }) {
    const [searchTerm, setSearchTerm] = useState('');



    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

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
                <thead>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.subject}>
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
