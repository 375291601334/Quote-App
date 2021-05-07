
const { Router } = require('express');
const quotesService = require('../services/quotes');

const router = new Router();

class SuccessResponse {
  constructor(data) {
    this.status = 'success';
    this.data = data;
  }
}

const getAllHandler = (req, res) => {
  res.json(new SuccessResponse(quotesService.getAllQuotes()));
};

const getByIdHandler = (req, res) => {
  const quote = quotesService.getQuote(req.params.id);

  if (!quote) {
    res.sendStatus(404);
    return;
  }

  res.json(new SuccessResponse(quote));
};

const getRandomHandler = (req, res) => {
  const randomQuote = quotesService.getRandomQuote();

  res.json(new SuccessResponse(randomQuote));
};

const postHandler = (req, res) => {
  const newQuote = quotesService.addQuote(req.body.quote);

  res.json(new SuccessResponse(newQuote));
};

const putHandler = (req, res) => {
  let editedQuote = quotesService.editQuote(req.params.id, req.body);

  if (editedQuote) {
    res.json(new SuccessResponse(editedQuote));
  } else {
    res.sendStatus(404);
  }
};

const deleteHandler = (req, res) => {
  let deletedQuote = quotesService.deleteQuote(req.params.id);

  if (deletedQuote) {
    res.json(new SuccessResponse(deletedQuote));
  } else {
    res.sendStatus(404);
  }
};

router.route('/')
  .get(getAllHandler)
  .post(postHandler);

router.route('/random')
  .get(getRandomHandler);

router.route('/:id')
  .get(getByIdHandler)
  .put(putHandler)
  .delete(deleteHandler);

module.exports = router;
