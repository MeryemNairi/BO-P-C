import * as React from 'react';
import { IFormProps, IFormData, IContactData } from './IFormProps';
import { submitForm, getFormData, updateFormEntry, deleteFormEntry, deleteFormDataBeforeToday, submitContact, getContacts, updateContact, deleteContact } from './FormeService';
import styles from './Forme.module.scss';
import Navbar from '../../Header/navbar';
import Footer from './Footer/footer';
import * as Modal from 'react-modal';

export const Forme: React.FC<IFormProps> = ({ context }) => {
  // Form data for Q&A
  const [formData, setFormData] = React.useState<IFormData>({
    id: 0,
    question: '',
    response: ''
  });

  const [formEntries, setFormEntries] = React.useState<IFormData[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Form data for Contacts
  const [contactData, setContactData] = React.useState<IContactData>({
    id: 0,
    nom: '',
    fonction: '',
    lieu: '',
    mail: ''
  });

  const [contactEntries, setContactEntries] = React.useState<IContactData[]>([]);
  const [isContactSubmitting, setIsContactSubmitting] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  // Fetch form data for Q&A
  React.useEffect(() => {
    fetchFormData();
    fetchContacts();
  }, []);

  const fetchFormData = async () => {
    try {
      await deleteFormDataBeforeToday();
      const formData = await getFormData();
      setFormEntries(formData);
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };

  const fetchContacts = async () => {
    try {
      const contacts = await getContacts();
      setContactEntries(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  // Handle input changes for Q&A
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle input changes for Contacts
  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setContactData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Q&A Modal handlers
  const handleOpenModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmSubmit = async () => {
    setIsModalOpen(false);

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (formData.id) {
        await updateFormEntry(formData.id, formData);
      } else {
        await submitForm(formData);
      }
      setFormData({
        id: 0,
        question: '',
        response: ''
      });
      alert('Form submitted successfully!');
      fetchFormData();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditEntry = (entry: IFormData) => {
    setFormData(entry);
  };

  const handleDeleteEntry = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      try {
        await deleteFormEntry(id);
        alert('Form entry deleted successfully!');
        fetchFormData();
      } catch (error) {
        console.error('Error deleting form entry:', error);
        alert('An error occurred while deleting the form entry. Please try again.');
      }
    }
  };

  // Contacts Modal handlers
  const handleOpenContactModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleConfirmContactSubmit = async () => {
    setIsContactModalOpen(false);

    if (isContactSubmitting) {
      return;
    }

    setIsContactSubmitting(true);

    try {
      if (contactData.id) {
        await updateContact(contactData.id, contactData);
      } else {
        await submitContact(contactData);
      }
      setContactData({
        id: 0,
        nom: '',
        fonction: '',
        lieu: '',
        mail: ''
      });
      alert('Contact submitted successfully!');
      fetchContacts();
    } catch (error) {
      console.error('Error submitting contact:', error);
      alert('An error occurred while submitting the contact. Please try again.');
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handleEditContact = (contact: IContactData) => {
    setContactData(contact);
  };

  const handleDeleteContact = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await deleteContact(id);
        alert('Contact deleted successfully!');
        fetchContacts();
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('An error occurred while deleting the contact. Please try again.');
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Navbar />

        {/* Q&A Form Section */}
          <div>
            <div style={{ marginBottom: '50px' }}></div>
            <div style={{ position: 'relative' }}>
              <form className={styles.formContainer1} onSubmit={handleOpenModal}>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    placeholder="Question"
                    className={styles.OffreTitle}
                    style={{ backgroundColor: '#F5F9FF', height: '40px', width: '709px' }}
                  />
                </div>
                <div className={styles.spacing}></div>
                <div className={styles.inputField}>
                  <textarea
                    id="response"
                    name="response"
                    value={formData.response}
                    onChange={handleInputChange}
                    placeholder="Response"
                    style={{ backgroundColor: '#F5F9FF', width: '690px', height: '200px' }}
                    className={styles.ShortDescription}
                  />
                </div>
                <div className={styles.spacing}></div>
                <div>
                  <button type="submit" className={styles.button} disabled={isSubmitting}>
                    Submit
                    <span style={{ marginLeft: '40px' }}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5664 10.0226L0.601308 19.7933L0.376323 0.70157L19.5664 10.0226Z" fill="#9EBBE3" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className={styles.spacing}></div>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={handleCloseModal}
                  className={styles.modal}
                  overlayClassName={styles.overlay}
                >
                  <h2>Verify your details</h2>
                  <div>
                    <p><strong>Question:</strong> {formData.question}</p>
                    <p><strong>Response:</strong> {formData.response}</p>
                  </div>
                  <div className={styles.modalButtons}>
                    <button className={styles.modalButton1} onClick={handleCloseModal}> <svg
                      width="28"
                      height="28"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.2609 25.4956H4.25V19.4847L20.4496 3.28514C20.7152 3.01956 21.0755 2.87036 21.4512 2.87036C21.8268 2.87036 22.1871 3.01956 22.4527 3.28514L26.4605 7.29147C26.5922 7.42305 26.6967 7.57929 26.768 7.75127C26.8393 7.92325 26.876 8.10759 26.876 8.29377C26.876 8.47994 26.8393 8.66429 26.768 8.83627C26.6967 9.00825 26.5922 9.16449 26.4605 9.29606L10.2609 25.4956ZM4.25 28.329H29.75V31.1623H4.25V28.329Z" fill="#FEC46D" />
                    </svg>
                    </button>
                    <button
                      className={styles.modalButton2}
                      onClick={handleConfirmSubmit}
                      disabled={isSubmitting}
                    >
                      Confirm & Submit
                    </button>
                  </div>
                </Modal>
                <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
                  <h2 className={styles.recordsTitle}>Q&A</h2>
                  <div className={styles.recordsContainer}>
                    {formEntries.map((entry, index) => (
                      <div key={index} className={styles.record}>
                        <div className={styles.recordField}>{entry.question}</div>
                        <div className={styles.recordField}>{entry.response}</div>
                        <span className={styles.iconSpace}></span>
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => handleEditEntry(entry)}
                        >
                          <path d="M10.2609 25.4956H4.25V19.4847L20.4496 3.28514C20.7152 3.01956 21.0755 2.87036 21.4512 2.87036C21.8268 2.87036 22.1871 3.01956 22.4527 3.28514L26.4605 7.29147C26.5922 7.42305 26.6967 7.57929 26.768 7.75127C26.8393 7.92325 26.876 8.10759 26.876 8.29377C26.876 8.47994 26.8393 8.66429 26.768 8.83627C26.6967 9.00825 26.5922 9.16449 26.4605 9.29606L10.2609 25.4956ZM4.25 28.329H29.75V31.1623H4.25V28.329Z" fill="#FEC46D" />
                        </svg>
                        <span className={styles.iconSpace}></span>
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => handleDeleteEntry(entry.id)}
                        >
                          <path d="M33.25 7H27.125L25.375 5.25H16.625L14.875 7H8.75V10.5H33.25M10.5 33.25C10.5 34.1783 10.8687 35.0685 11.5251 35.7249C12.1815 36.3813 13.0717 36.75 14 36.75H28C28.9283 36.75 29.8185 36.3813 30.4749 35.7249C31.1313 35.0685 31.5 34.1783 31.5 33.25V12.25H10.5V33.25Z" fill="#FF5454" />
                        </svg>
                      </div>

                    ))}
                  </div>
                </div>
              </form>
            </div>
            <div style={{ marginBottom: '50px' }}></div>

            {/* Contacts Form Section */}
            <div >
              <form className={styles.formContainer1} onSubmit={handleOpenContactModal}>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={contactData.nom}
                    onChange={handleContactInputChange}
                    placeholder="Name"
                    className={styles.OffreTitle}
                    style={{ backgroundColor: '#F5F9FF', height: '40px', width: '709px' }}
                  />
                </div>
                <div className={styles.spacing}></div>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    id="fonction"
                    name="fonction"
                    value={contactData.fonction}
                    onChange={handleContactInputChange}
                    placeholder="Function"
                    className={styles.OffreTitle}
                    style={{ backgroundColor: '#F5F9FF', height: '40px', width: '709px' }}
                  />
                </div>
                <div className={styles.spacing}></div>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    id="lieu"
                    name="lieu"
                    value={contactData.lieu}
                    onChange={handleContactInputChange}
                    placeholder="Location"
                    className={styles.OffreTitle}
                    style={{ backgroundColor: '#F5F9FF', height: '40px', width: '709px' }}
                  />
                </div>
                <div className={styles.spacing}></div>
                <div className={styles.inputField}>
                  <input
                    type="email"
                    id="mail"
                    name="mail"
                    value={contactData.mail}
                    onChange={handleContactInputChange}
                    placeholder="Email"
                    className={styles.OffreTitle}
                    style={{ backgroundColor: '#F5F9FF', height: '40px', width: '709px' }}
                  />
                </div>
                <div className={styles.spacing}></div>

                <div>
                  <button type="submit" className={styles.button} disabled={isSubmitting}>
                    Submit
                    <span style={{ marginLeft: '40px' }}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5664 10.0226L0.601308 19.7933L0.376323 0.70157L19.5664 10.0226Z" fill="#9EBBE3" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className={styles.spacing}></div>
                <Modal
                  isOpen={isContactModalOpen}
                  onRequestClose={handleCloseContactModal}
                  className={styles.modal}
                  overlayClassName={styles.overlay}
                >
                  <h2>Verify your details</h2>
                  <div>
                    <p><strong>Name:</strong> {contactData.nom}</p>
                    <p><strong>Function:</strong> {contactData.fonction}</p>
                    <p><strong>Location:</strong> {contactData.lieu}</p>
                    <p><strong>Email:</strong> {contactData.mail}</p>
                  </div>
                  <div className={styles.modalButtons}>
                    <button className={styles.modalButton1} onClick={handleCloseModal}> <svg
                      width="28"
                      height="28"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.2609 25.4956H4.25V19.4847L20.4496 3.28514C20.7152 3.01956 21.0755 2.87036 21.4512 2.87036C21.8268 2.87036 22.1871 3.01956 22.4527 3.28514L26.4605 7.29147C26.5922 7.42305 26.6967 7.57929 26.768 7.75127C26.8393 7.92325 26.876 8.10759 26.876 8.29377C26.876 8.47994 26.8393 8.66429 26.768 8.83627C26.6967 9.00825 26.5922 9.16449 26.4605 9.29606L10.2609 25.4956ZM4.25 28.329H29.75V31.1623H4.25V28.329Z" fill="#FEC46D" />
                    </svg>
                    </button>
                    <button
                      className={styles.modalButton2}
                      onClick={handleConfirmContactSubmit}
                      disabled={isContactSubmitting}
                    >
                      Confirm & Submit
                    </button>
                  </div>
                </Modal>
                <div>
                  <h2 className={styles.recordsTitle}>Contacts</h2>
                  <div className={styles.recordsContainer}>
                    {contactEntries.map((contact, index) => (
                      <div key={index} className={styles.record}>
                        <div className={styles.recordField}>{contact.nom}</div>
                        <div className={styles.recordField}>{contact.fonction}</div>
                        <div className={styles.recordField}>{contact.lieu}</div>
                        <div className={styles.recordField}>{contact.mail}</div>
                        <span className={styles.iconSpace}></span>
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => handleEditContact(contact)}
                        >
                          <path d="M10.2609 25.4956H4.25V19.4847L20.4496 3.28514C20.7152 3.01956 21.0755 2.87036 21.4512 2.87036C21.8268 2.87036 22.1871 3.01956 22.4527 3.28514L26.4605 7.29147C26.5922 7.42305 26.6967 7.57929 26.768 7.75127C26.8393 7.92325 26.876 8.10759 26.876 8.29377C26.876 8.47994 26.8393 8.66429 26.768 8.83627C26.6967 9.00825 26.5922 9.16449 26.4605 9.29606L10.2609 25.4956ZM4.25 28.329H29.75V31.1623H4.25V28.329Z" fill="#FEC46D" />
                        </svg>
                        <span className={styles.iconSpace}></span>
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => handleDeleteContact(contact.id)}
                        >
                          <path d="M33.25 7H27.125L25.375 5.25H16.625L14.875 7H8.75V10.5H33.25M10.5 33.25C10.5 34.1783 10.8687 35.0685 11.5251 35.7249C12.1815 36.3813 13.0717 36.75 14 36.75H28C28.9283 36.75 29.8185 36.3813 30.4749 35.7249C31.1313 35.0685 31.5 34.1783 31.5 33.25V12.25H10.5V33.25Z" fill="#FF5454" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
            <div style={{ marginBottom: '50px' }}></div>
          </div>

        </div>

      <Footer />

    </>
  );
};

export default Forme;

