import React from 'react';
import Sidebar from './Sidebar';
import EmailTable from './EmailTable';

function Inbox() {
    const dummyData = [
        { subject: "Hello", body: "Just wanted to say hi!" },
        { subject: "Meeting Reminder", body: "Don't forget about our meeting tomorrow." },
        { subject: "Important Update", body: "Please read the attached document for important updates." },
        { subject: "Request for Feedback", body: "Your feedback is valuable to us. Please share your thoughts." },
        { subject: "Weekly Newsletter", body: "Check out our latest newsletter for updates." },
        { subject: "Follow-up on Project", body: "Just following up on the progress of our project." },
        { subject: "Vacation Request Approved", body: "Your vacation request has been approved. Enjoy your time off!" },
        { subject: "Your Order Confirmation", body: "Confirmation for your recent order. Thank you for shopping with us." }
      ];
      

    return (
        <div className='container mt-5'>
            <Sidebar />
            <EmailTable data={dummyData } />
        </div>
    );
}

export default Inbox;
