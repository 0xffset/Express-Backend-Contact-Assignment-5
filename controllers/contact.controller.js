const fs = require('fs');
const axios = require('axios')
const https = require('https');
const URL = "https://www.raydelto.org/agenda.php";

// At request level
const agent = new https.Agent({
    rejectUnauthorized: false
});

const list = async(req, res) => {
    try {
        let listContacts = await axios.get(URL, { httpsAgent: agent })
        return res.json(listContacts.data);

    } catch (err) {
        return res.status(401).json({
            error: err
        })
    }

}

const create = async(req, res) => {
    const contact = req.body;
    try {
        let response = await axios.post(URL, contact, { httpsAgent: agent })
        return res.status(200).json({
            message: "The Contact Was Created Successfully 👌"
        })
    } catch (err) {
        return res.status(400).json({
            error: "Ooop! 😥 Error To Create The Contact "
        })
    }
}
module.exports = {
    list,
    create
}