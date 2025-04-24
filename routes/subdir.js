const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'subdir', 'index.html'));
});

router.get('/index', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'subdir', 'index.html'));
});
router.get('/signup(.html)', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'subdir', 'signup.html'));
});
router.get('/scp-list-page(.html)', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'subdir', 'scp-list-page.html'));
});
router.get('/therapy-page(.html)', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'subdir', 'therapy-page.html'));
});
router.get('/account-page(.html)', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'subdir', 'account-page.html'));
})
router.get('../index(.html)?', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'index.html'));
});
router.get('/onboarding-page(.html)', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'subdir', 'onboarding-page.html'));
});
router.get('/register-entity-page(.html)', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'subdir', 'register-entity-page.html'));
});
module.exports = router;