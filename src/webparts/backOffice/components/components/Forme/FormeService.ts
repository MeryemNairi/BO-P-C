import { sp } from '@pnp/sp';
import { IFormData, IContactData } from './IFormProps'; // Ensure the import path is correct

// Form Service Functions
export const submitForm = async (formData: IFormData) => {
  try {
    const list = sp.web.lists.getByTitle('QandA_PandC');
    await list.items.add({
      question: formData.question,
      response: formData.response
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('An error occurred while submitting the form. Please try again.');
  }
};

export const getFormData = async (): Promise<IFormData[]> => {
  try {
    const list = sp.web.lists.getByTitle('QandA_PandC');
    const items = await list.items.orderBy('Id', false).select('Id', 'question', 'response').get();
    return items.map((item: any) => ({
      id: item.Id,
      question: item.question,
      response: item.response
    }));
  } catch (error) {
    console.error('Error fetching form data:', error);
    throw new Error('An error occurred while fetching form data. Please try again.');
  }
};

export const updateFormEntry = async (id: number, formData: IFormData) => {
  try {
    const list = sp.web.lists.getByTitle('QandA_PandC');
    await list.items.getById(id).update({
      question: formData.question,
      response: formData.response
    });
  } catch (error) {
    console.error('Error updating form entry:', error);
    throw new Error('An error occurred while updating the form entry. Please try again.');
  }
};

export const deleteFormEntry = async (id: number) => {
  try {
    const list = sp.web.lists.getByTitle('QandA_PandC');
    await list.items.getById(id).delete();
  } catch (error) {
    console.error('Error deleting form entry:', error);
    throw new Error('An error occurred while deleting the form entry. Please try again.');
  }
};

// Contacts Service Functions
export const submitContact = async (contactData: IContactData) => {
  try {
    const list = sp.web.lists.getByTitle('ContactsV2');
    await list.items.add({
      Nom: contactData.nom,
      Fonction: contactData.fonction,
      lieu: contactData.lieu,
      mail: contactData.mail
    });
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw new Error('An error occurred while submitting the contact. Please try again.');
  }
};

export const getContacts = async (): Promise<IContactData[]> => {
  try {
    const list = sp.web.lists.getByTitle('ContactsV2');
    const items = await list.items.select('Id', 'Nom', 'Fonction', 'lieu', 'mail').get();
    return items.map((item: any) => ({
      id: item.Id,
      nom: item.Nom,
      fonction: item.Fonction,
      lieu: item.lieu,
      mail: item.mail
    }));
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw new Error('An error occurred while fetching contacts. Please try again.');
  }
};

export const updateContact = async (id: number, contactData: IContactData) => {
  try {
    const list = sp.web.lists.getByTitle('ContactsV2');
    await list.items.getById(id).update({
      Nom: contactData.nom,
      Fonction: contactData.fonction,
      lieu: contactData.lieu,
      mail: contactData.mail
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    throw new Error('An error occurred while updating the contact. Please try again.');
  }
};

export const deleteContact = async (id: number) => {
  try {
    const list = sp.web.lists.getByTitle('ContactsV2');
    await list.items.getById(id).delete();
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw new Error('An error occurred while deleting the contact. Please try again.');
  }
};

// Since there are no dates involved, this function may not be applicable. If needed, remove or modify it.
export const deleteFormDataBeforeToday = async () => {
  console.warn('Function deleteFormDataBeforeToday is not applicable with the current attributes.');
};
