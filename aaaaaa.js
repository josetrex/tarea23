const contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" },
  ];
  
  // Function to display the contact list
  function displayContacts(contacts) {
    console.log("Contact List:");
    contacts.forEach((contact, index) => {
      console.log(
        `${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
      );
    });
    console.log("\n"); // For better readability
  }
  
  // Function to add a new contact
  function addContact(name, phone, email) {
    const newContact = { name, phone, email };
    contactList.push(newContact);
    console.log(`Added new contact: ${name}`);
  }
  
  // Function to display the first and last contacts
  function displayFirstAndLastContacts(contacts) {
    if (contacts.length > 0) {
      console.log("First Contact:");
      console.log(
        `Name: ${contacts[0].name}, Phone: ${contacts[0].phone}, Email: ${contacts[0].email}`
      );
  
      console.log("Last Contact:");
      console.log(
        `Name: ${contacts[contacts.length - 1].name}, Phone: ${contacts[contacts.length - 1].phone}, Email: ${contacts[contacts.length - 1].email}`
      );
    } else {
      console.log("The contact list is empty.");
    }
  }
  
  // Display the initial contact list
  displayContacts(contactList);
  
  // Add a new contact with hard-coded data
  addContact("Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");
  
  // Display the updated contact list
  displayContacts(contactList);
  
  // Display the first and last contacts
  displayFirstAndLastContacts(contactList);