module.exports = function(app,db) {
  app.post('/notes', (req,res) => {
    console.log(req.body)
    res.send('Wazzup').status(201)
  })
}