require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const bodyParser = require("body-parser");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const axios = require("axios");


const {
   SERVER_PORT,
   SESSION_SECRET,
   CONNECTION_STRING,
   CLIENT_ID,
   DOMAIN,
   CLIENT_SECRET,
   CALLBACK_URL
} = process.env;

const app = express();

app.use(bodyParser.json());
massive(CONNECTION_STRING).then(
   db => app.set("db", db)
); 

app.use(session({
   secret: SESSION_SECRET,
   resave: false,
   saveUninitialized: true
}))
app.use( passport.initialize() );

app.use( passport.session() );


passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    db.findUser([profile.id]).then( userResult => {
        console.log(userResult)
        if (!userResult[0]) {
            console.log('Creating user')
            db.createUsers([
                profile.displayName, 
                profile.id
            ]).then( createdUser => {
                return done(null, createdUser[0])
            });
        } else {
            console.log('existing user')
            return done(null, userResult[0])
        }
    })
}));

passport.serializeUser( (user, done) => {
    console.log(user)
   // the user information from Google is put on the session here
   done(null, user);

   //whatever is passed out goes on to req.user
})
passport.deserializeUser((user, done) => {
    console.log(user)
    app.get('db').findSessionUser([user.auth_id]).then( loggedInUser => {
        done(null,loggedInUser[0]);
    })
});

app.get('/characters', (req, res) =>{
    db.getCharacters(req.data.user_id).then( res => {
    })
})

app.get('/logged-in', (req, res) =>{
    console.log(req.session)
    if(req.session.passport){
        return res.status(200).send(req.session.passport.user)
    }
    else{
        return res.sendStatus(401)
    }

})

app.get("/auth", passport.authenticate("auth0"));
app.get("/auth/callback", passport.authenticate("auth0", {
    successRedirect: 'http://localhost:3000/#/home',
    failureRedirect: 'http://localhost:3000/#/'
} ))


const port = process.env.SERVER_PORT || 3005
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );

