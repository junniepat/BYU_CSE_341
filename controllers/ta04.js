exports.postStyle = (req, res, next) => {
    console.log('hello');
    req.session.style = req.body.color;
    res.redirect('/ta04');
  };
  
  exports.postCounter = (req, res, next) => {
    req.session.counter += Number(req.body.constant); // Need to convert it from string to integer.
    res.redirect('/ta04');
  };
  
  exports.resetSession = (req, res, next) => {
    if (req.body.reset === 'true') {
      req.session.destroy(()=> {
        res.redirect('/ta04');
      });
    }
    else {
        res.redirect('/ta04');
    }
  };
  
  exports.getIndex = (req, res, next) => {
    if(req.session.style === undefined) {
      req.session.style = '#FF0000';
    }
    if(req.session.counter === undefined) {
      req.session.counter = 0;
    }
    res.render('pages/ta04', {
      title: 'Team Activity 04',
      path: '/ta04',
      style: req.session.style,
      counter: req.session.counter
    });
  };