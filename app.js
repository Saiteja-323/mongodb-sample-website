const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userModel = require('./models/user');
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/read', async (req, res) => {
  try {
    const users = await userModel.find();
    res.render('read', { users });
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
});
app.post('/create', async (req, res) => {
  try {
    const { name, email, image } = req.body;
    await userModel.create({ name, email, image });
    res.redirect('/read');
  } catch (err) {
    res.status(500).send('Error creating user');
  }
});
app.get('/edit/:userid', async (req, res) => {
  try {
    let user = await userModel.findOne({ _id: req.params.userid });
    res.render('edit', { user });
  } catch (err) {
    res.status(500).send('Error deleting user');
  }
});
app.post('/update/:userid', async (req, res) => {
  let {name,email,image}=req.body;
  let user = await userModel.findOneAndUpdate({ _id: req.params.userid }, {name,email,image}, { new: true });
  res.redirect('/read');
});
app.get('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.redirect('/read');
  } catch (err) {
    res.status(500).send('Error deleting user');
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
