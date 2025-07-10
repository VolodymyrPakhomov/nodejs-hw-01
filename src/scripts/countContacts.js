import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const qtyCount = contacts.length;
    return qtyCount;
  } catch (error) {
    console.error('Error getting contact ', error);
    return 0;
  }
};

console.log(await countContacts());
