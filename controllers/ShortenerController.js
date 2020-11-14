let nanoid = require('nanoid');
let urlModel = require('../models/URL');

exports.generateUrl = (req, res) => {
  let token = nanoid.nanoid(5);
  let url = {
    original: req.body.original_url,
    token: token,
  }

  urlModel.create(url).then((id) => {
      res.render('homepage/index', { new_url: `http://localhost:3000/${token}` })
  })
}

exports.redirect = (req, res) => {
  let token = req.params.id;
  
  urlModel.findByToken(token).then((url) => {
    urlModel.incrementCount(url.id).then((data) => {
      let regex = new RegExp('http\\w+');
      if(regex.test(url.original)){
        res.redirect(url.original);
      } else {
        res.redirect('http://'+url.original);
      }
    })
  })
}

exports.showStadistic = (req, res) => {
  let token = req.params.id;

  urlModel.findByToken(token).then((url) => {
    let model = {
      original: url.original,
      token: 'http://localhost:3000/' + url.token,
      redirections: url.redirections,
    }
    res.render('homepage/stadistics', { url: model });
  })
}