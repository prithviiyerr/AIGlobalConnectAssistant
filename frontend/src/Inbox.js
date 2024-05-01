import React, { useState } from 'react';
import EmailTable from './EmailTable';
import ComposeModal from './Modals/ComposeModal';
import EmailDetailModal from './Modals/EmailDetailModal';
import { useNavigate } from 'react-router-dom';
import './css/Inbox.css';
import NavigateApp from './Navigation/NavigateApp';

function Inbox({ userId, setUserId, showLogout, setShowLogout }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [composeModalVisible, setComposeModalVisible] = useState(false);
  // State for the Email Detail Modal visibility and selected email
  const [emailDetailVisible, setEmailDetailVisible] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const dummyData = [
    { sender: "Good Friend", subject: "Nueva Oferta", body: "Por medio de la presente, nos complace informarle de nuestras nuevas ofertas primaverales en la tienda en línea de Planterra. A partir de hoy y hasta el 31 de mayo, todos nuestros clientes podrán disfrutar de un descuento exclusivo del 20 % sobre el precio final de cualquier producto. Esto aplica para nuestros productos de temporada y nuestros productos cotidianos. Si usted desea aprovechar este descuento, por favor inicie sesión como miembro de nuestra página web. De inmediato, usted podrá tener acceso a nuestros precios reducidos por esta gran promoción. Sin más por el momento, le deseamos lo mejor en esta época primaveral. Saludos cordiales, El equipo de Planterra"},
    { sender: "John Smith", subject: "Hello", body: "Just wanted to say hi!" },
    { sender: "Emily Johnson", subject: "Meeting Reminder", body: "Don't forget about our meeting tomorrow." },
    { sender: "Daniel Brown", subject: "Important Update", body: "Please read the attached document for important updates." },
    { sender: "Sophia Martinez", subject: "Request for Feedback", body: "Your feedback is valuable to us. Please share your thoughts." },
    { sender: "Michael Davis", subject: "Weekly Newsletter", body: "Check out our latest newsletter for updates." },
    { sender: "Olivia Wilson", subject: "Follow-up on Project", body: "Just following up on the progress of our project." },
    { sender: "Ethan Taylor", subject: "Vacation Request Approved", body: "Your vacation request has been approved. Enjoy your time off!" },
    { sender: "Ava Anderson", subject: "Your Order Confirmation", body: "Confirmation for your recent order. Thank you for shopping with us." },
    { sender: "Noah Garcia", subject: "Upcoming Event Details", body: "Here are the details for the upcoming event. Please review and let us know if you have any questions." },
    { sender: "Isabella Martinez", subject: "Reminder: Deadline Approaching", body: "Just a reminder that the deadline for submission is approaching. Make sure to submit your work on time." },
];
  const openComposeModal = () => setComposeModalVisible(true);
  const closeComposeModal = () => setComposeModalVisible(false);

  const handleLogout = () => {
    setUserId(null);
    navigate('/');
  };

  const openEmailDetailModal = (email) => {
    setSelectedEmail(email); // Set the selected email
    setEmailDetailVisible(true); // Show the detail modal
  };

  const closeEmailDetailModal = () => setEmailDetailVisible(false);

  return (
    <div className='container mt-5'>
      <NavigateApp onCompose={openComposeModal} setSearchTerm={setSearchTerm} />
      <div>
        <EmailTable data={dummyData} onEmailClick={openEmailDetailModal} searchTerm={searchTerm} />
        <ComposeModal userId={userId} setUserId={setUserId} onClose={closeComposeModal} visible={composeModalVisible} />
        <EmailDetailModal email={selectedEmail} onClose={closeEmailDetailModal} visible={emailDetailVisible} />
      </div>
      {/* {showLogout && (
        <button className="auth-button logout-button" onClick={handleLogout}>
          Logout
        </button>
      )} */}
    </div>
  );
}

export default Inbox;
