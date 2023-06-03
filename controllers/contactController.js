const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@acewss public
const getContacts = asyncHandler((req, res) => {
    res.json({ message: "GET all contacts" });
});

//@desc create new contact
//@route POST /api/contacts
//@acewss public
const createContact = asyncHandler(async (req, res) => {
    console.log("The req body is :",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fiels are mandatory");
    }
    res.json({ message: "create contact" });
  });

//@desc get contact
//@route GET /api/contacts/:id
//@acewss public
const getContact = asyncHandler(async (req, res) => {
    res.json({ message: `get contact for ${req.params.id}`});
});

//@desc update contact
//@route PUT /api/contacts/:id
//@acewss public
const updateContact =asyncHandler (async (req, res) => {
    res.json({ message: `update contact for ${req.params.id}`});
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@acewss public
const deleteContact = asyncHandler (async (req, res) => {
    res.json({ message: `delete contact for ${req.params.id}`});
});




module.exports = {getContact,createContact,getContacts,updateContact,deleteContact};