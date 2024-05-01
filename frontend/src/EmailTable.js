import { React, useState } from 'react';
import './css/EmailTable.css';
import './css/ReactPaginate.css'
import ReactPaginate from 'react-paginate';
import { FaTrash } from "react-icons/fa";


function EmailTable({ data, onEmailClick, searchTerm }) {
    const filteredData = searchTerm !== "" ? data.filter(
        item =>
            item.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.body.toLowerCase().includes(searchTerm.toLowerCase())
    ) : data;
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentEmails = filteredData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        setItemOffset(newOffset);
    };

    const currentItemCount = Math.min(endOffset, filteredData.length);
    const totalItemCount = filteredData.length;

    return (
        <div className='emails-container'>
            <div className='pages'>
                <div className='page-info'>
                    {`Displaying ${itemOffset + 1}-${currentItemCount} of ${totalItemCount}`}
                </div>
                <ReactPaginate
                    containerClassName={'pagination'}
                    nextLinkClassName={"item next"}
                    previousLinkClassName={"item next"}
                    nextLabel=">"
                    previousLabel="<"
                    pageCount={null}
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null} />
            </div>
            <div className="table-container">
                <table className="table">
                    <tbody>
                        {currentEmails.map((item, index) => (
                            <tr key={index} onClick={() => onEmailClick(item)}>
                                <td style={{ width: '50px' }}>
                                    <input type="checkbox" className="form-check-input mt-3" />
                                </td>
                                <td style={{ width: '250px' }}>
                                    <div className='row fw-bold'>
                                        {item.sender}
                                    </div>
                                    <div className='row text-success'>
                                        {item.subject}
                                    </div>
                                </td>
                                <td style={{ width: '1190px', maxHeight: '50px', paddingTop: '20px' }} className='fw-lighter'>
                                    {item.body}
                                </td>
                                <td style={{ paddingTop: '20px'}}>
                                    <button style={{ border: 'none', background: 'none' }}>
                                        <FaTrash style={{ color: 'gray'}} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmailTable;
