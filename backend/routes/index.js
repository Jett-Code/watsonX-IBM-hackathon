const express = require('express');
const passport = require('passport');
const { getImportantMails, getImportantMailsForCategory } = require('../services/mailService');

const router = express.Router();

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/gmail.readonly'] })
);

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
  }
);
// this route is for other categories which doesn't need auth and when clicking on categoreis redirects to a page where use can enter an emaill address


router.post('/important-mails/:category', async (req, res) => {
    const { category } = req.params;
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    try {
      const importantMails = await getImportantMailsForCategory(email, category);
      res.json(importantMails);
    } catch (error) {
      console.error('Error fetching important mails:', error);
      res.status(500).json({ error: 'Failed to fetch important mails' });
    }
  });

router.get('/important-mails', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const importantMails = await getImportantMails(req.user.accessToken);
    res.json(importantMails);
  } catch (error) {
    console.error('Error fetching important mails:', error);
    res.status(500).json({ error: 'Failed to fetch important mails' });
  }
});

module.exports = router;