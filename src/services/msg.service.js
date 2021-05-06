export const msgService = { query, add };

var msgs = [
  { email: "guyamsalem06@gmail.com", text: "Hello motherfucker" },
  { email: "or@gmail.com", text: "Hello" },
];

async function query(filterBy) {
  return msgs.filter(
    (msg) =>
      msg.email.toLowerCase().includes(filterBy.toLowerCase()) ||
      msg.text.toLowerCase().includes(filterBy.toLowerCase())
  );
}

async function add(email, text) {
  msgs.push({ email, text });
}
