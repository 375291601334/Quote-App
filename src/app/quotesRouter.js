const { Router } = require('express');

const router = new Router();

let quotes = require('quotesy').parse_json().map((quote, index) => ({
  id: index.toString(),
  tags: '',
  isDeleted: false,
  createdBy: 'Quote App',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  ...quote,
}));

router.get('/', (req, res) => {
  res.json({ status: 'success', data: quotes });
});

router.get('/random', (req, res) => {
  if (req.query.tag) {
    const filteredQuotes = quotes.filter(quote =>
      (quote.tags || []).includes(req.query.tag) || (quote.text || []).includes(req.query.tag)
    );
    res.json({
      status: 'success',
      data: filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)] || null
    });
  }

  res.json({ status: 'success', data: quotes[Math.floor(Math.random() * quotes.length)] });
});

router.get('/:id', (req, res) => {
  const quote = quotes.find(quote => quote.id === req.params.id);
  quote ? res.json({ status: 'success', data: quote }) : res.sendStatus(404);
});

router.post('/', (req, res) => {
  const newQuote = {
    id: quotes.length.toString(),
    isDeleted: false,
    createdBy: 'User',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...req.body.quote,
  };

  quotes.push(newQuote);
  res.json({
    status: 'success',
    quote: newQuote,
  });
});

router.put('/:id', (req, res) => {
  let editedQuote;

  quotes = quotes.map(quote => {
    if (quote.id === req.params.id) {
      editedQuote = {
        ...quote,
        ...req.body,
        updatedAt: Date.now(),
      };
      return editedQuote;
    }

    return quote;
  });

  if (editedQuote) {
    res.json({
      status: 'success',
      quote: editedQuote,
    });
  } else {
    res.sendStatus(404);
  }
});

router.delete('/:id', (req, res) => {
  let deletedQuote;

  quotes = quotes.map(quote => {
    if (quote.id === req.params.id) {
      deletedQuote = {
        ...quote,
        isDeleted: true,
        updatedAt: Date.now(),
      };
      return deletedQuote;
    }

    return quote;
  });

  if (deletedQuote) {
    res.json({
      status: 'success',
      quote: deletedQuote,
    });
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
