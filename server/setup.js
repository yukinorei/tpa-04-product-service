const express = require('express');

const setup = (app) => {
  const apiRouter = express.Router();

  //
  // TODO
  //
  // apiRouter にAPIルートとハンドラーを設定する
  //

  app.use('/api', apiRouter);
};

module.exports = setup;
