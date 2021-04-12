const express = require('express');
const router = express.Router();
const connect = require("../config/sqlConfig");
// const path = require('path');
// const hbs = require('hbs');

router.use(express.json());
router.use(express.urlencoded({extended: false}));

// router.get('/login', (req, res) => {
//     //see if the user existes in the DB: if so, then store in the session
//     if (req.session.pageViews) {
//         req.session.pageViews++;
//         rew.send(`You've been here ${req.session.pageViews} times`);
//     } else {
//         req.session.pageViews = 1;
//         res.send(`Welcome! Enjoy your stay.`);
//     }
// })

router.post('/admin/login', (req, res) => {
    // console.log(req.body.username, req.body.password);
    connect.query(`SELECT user_id, user_admin, user_access, user_avatar FROM tbl_user WHERE user_name = "${req.body.username}"`, (err, row) => {
        if (err) throw err;

        if (row.length) {
            res.status(200).json(row[0]);
        }  else {
            res.status(404).res.json({failure: true, message: 'user not found'});
        }
    });
})

