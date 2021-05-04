
const User = require("../model/user")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res, next) => {
	let loginuser = req.body
	try {
	
		let useremail= await User.findOne({ email: loginuser.email })
		console.log(useremail);
	
		if (useremail === null) {
			return res.status(401).send('incorrect email')
		}

		let comparePasswort = await bcrypt.compare(loginuser.password, useremail.password)
		
		if (comparePasswort) {

			let token = jwt.sign({
				email: useremail.email,
				userId: useremail._id,
			}, process.env.JWT || 'ein Geheimnis', {expiresIn: '3h'})
			res.status(200).json({
				nachricht: 'You are log it',
				token: token
			})
		} else {
			res.status(401).send('You are  not log it')
		}
	} catch (error) {
		res.status(401).send('Du konntest nicht eingeloggt werden')
	}
}
  


exports.signup = async (req, res, next) => {
	try {
		const newuser = req.body
	
		let schonVorhandenUser = await User.find({ email: newuser.email })
		if (schonVorhandenUser.length >= 1) {
			return res.status(409).send('Es gib schon einen Nutzer mit dieser Email')
		}

		let passwortGehashed = await bcrypt.hash(newuser.password, 10)
		let createuser = await User.create({ ...newuser, password: passwortGehashed })
		res.status(201).send(createuser);

	} catch (fehler) {
		res.status(500).send('Da lief was schief!')
	}
}

