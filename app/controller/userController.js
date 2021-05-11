
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
	
		let alreadyuser = await User.find({ email: newuser.email })
		if (alreadyuser.length >= 1) {
			return res.status(409).send('There is already a user with this email')
		}

		let passwortGehashed = await bcrypt.hash(newuser.password, 10)
		let createuser = await User.create({ ...newuser, password: passwortGehashed })
		res.status(201).send(createuser);

	} catch (error) {
		res.status(500).send('Something went wrong!')
	}
}


exports.getsignup = (req, res) => {
	User.find().then((erfolg) => {
	  res.status(200).send(erfolg);
	}).catch((error) => {
	  res.status(400).send(" get signup error " + error);
	});
  }

