import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());
// getAllContacts();
