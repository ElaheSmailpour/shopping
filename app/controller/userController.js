const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const User = require("../model/user")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res, next) => {
	let loginuser = req.body
	try {

		let useremail = await User.findOne({ email: loginuser.email })
		console.log(useremail);

		if (useremail === null) {
			return res.status(401).send('incorrect email')
		}

		let comparePasswort = await bcrypt.compare(loginuser.password, useremail.password)

		if (comparePasswort) {

			let token = jwt.sign({
				email: useremail.email,
				userId: useremail._id,
			}, process.env.JWT || 'ein Geheimnis', { expiresIn: '3h' })
			res.status(200).json({
				message: 'You are log it',
				token: token,
				name:useremail.name,
				image:useremail.image
			})
		} else {
			res.status(401).send('You are  not log it')
		}
	} catch (error) {
		res.status(401).send('Du konntest nicht eingeloggt werden')
	}
}






exports.getsignup = (req, res) => {
	User.find().then((erfolg) => {
		res.status(200).send(erfolg);
	}).catch((error) => {
		res.status(400).send(" get signup error " + error);
	});
}
//post-signup

exports.signup = async (req, res, next) => {
	try {
		const newuser = req.body

		
		const imagefilename = req.file.filename
	   
		 console.log("imagefilename=",imagefilename)
		let alreadyuser = await User.find({ email: newuser.email })
		if (alreadyuser.length >= 1) {
			return res.status(409).send('There is already a user with this email')
		}

		let passwortGehashed = await bcrypt.hash(newuser.password, 10)
		let createuser = await User.create({ ...newuser, password: passwortGehashed,image:"http://localhost:" + process.env.PORT + "/" + imagefilename})
		console.log("multer=","http://localhost:" + process.env.PORT + "/" + imagefilename)
		
		res.status(201).send(createuser );
	
	} catch (error) {
		res.status(500).send('Something went wrong!')
	}
}


//googleaccount
exports.googleaccount = async (req, res) => {
	const { token } = req.body
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: process.env.CLIENT_ID
	});
	const { name, email, picture } = ticket.getPayload();
	const user = await User.findOne({email})
	if (!user){
		 return res.status(401).send("find not Your Email and please signup !")
	}
	await User.updateOne({email},{$set:{name,image:picture}})
	console.log("user=",user)
	
	let tokenjwt = jwt.sign({
		email:email,
		userId: user._id,
	}, process.env.JWT || 'ein Geheimnis', { expiresIn: '3h' })
	res.status(200).json({
		message: 'You are log it',
		token: tokenjwt,
		name:user.name,
		image:user.image
	})
	
}

exports.signupgoogle = async (req, res) => {

	const { token } = req.body
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: process.env.CLIENT_ID
	});
	const { name, email, picture } = ticket.getPayload();
	const user = await User.findOne({email})
	if (user){
		
		return res.status(401).send("Already user und please signup !")
		
	}
	
	let createuser=await User.create({name,email,image:picture})
	let tokenjwt = jwt.sign({
		email:email,
		userId: createuser._id,
	}, process.env.JWT || 'ein Geheimnis', { expiresIn: '3h' })
	res.status(200).json({
		message: 'You are log it',
		token: tokenjwt,
		name:createuser.name,
		image:createuser.image
	})
	
}

exports.deleteloginuser = (req, res, next) => {
	const { _id } = req.params;

	User.deleteOne({ _id }).then(
		(erfolg) => {
			res.status(200).send(erfolg);
		}
	).catch(
		(error) => {
			res.status(500).send({ message: "error with DELETE login", objekt: error })
		}
	)
}
