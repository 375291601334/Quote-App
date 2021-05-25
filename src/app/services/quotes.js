const uuidv4 = require('uuid').v4;

class Quote {
  constructor({ id, author, text, source, tags, createdBy, createdAt, updatedAt, isDeleted }) {
    this.id = id || uuidv4();
    this.author = author || 'No author';
    this.text = text || 'No text';
    this.source = source || '';
    this.tags = tags || '';
    this.isDeleted = isDeleted || false;
    this.createdBy = createdBy || 'Quote App';
    this.createdAt = createdAt || Date.now();
    this.updatedAt = updatedAt || Date.now();
  }
}

let quotes = require('quotesy').parse_json().map((quote) => (new Quote(quote)));

const getAllQuotes = () => quotes;

const getQuote = (id) => quotes.find(quote => quote.id === id);

const getRandomQuote = (tag) => {
  let filteredQuotes = quotes;

  if (tag) {
    filteredQuotes = quotes.filter(quote =>
      (quote.tags || []).includes(tag) || (quote.text || []).includes(tag)
    );
  }

  return filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)] || null;
};

const addQuote = (quote) => {
  const newQuote = new Quote({ createdBy: 'User', ...quote });

  quotes.push(newQuote);
  return newQuote;
};

const editQuote = (id, quote) => {
  let editedQuote;

  quotes = quotes.map(item => {
    if (item.id === id) {
      editedQuote = new Quote({
        ...item,
        ...quote,
        updatedAt: Date.now(),
      });
      return editedQuote;
    }

    return item;
  });

  return editedQuote || null;
};

const deleteQuote = (id) => {
  let deletedQuote;

  quotes = quotes.map(quote => {
    if (quote.id === id) {
      deletedQuote = {
        ...quote,
        isDeleted: true,
        updatedAt: Date.now(),
      };
      return deletedQuote;
    }

    return quote;
  });

  return deletedQuote || null;
};

module.exports = {
  getAllQuotes,
  getRandomQuote,
  getQuote,
  addQuote,
  editQuote,
  deleteQuote,
};
