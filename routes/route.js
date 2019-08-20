const express = require("express");
const router = express.Router();
const contact = require("../model/contact");

//getContacts
router.get("/contacts", (req, res, next) => {
  contact.find(function(err, contact) {
    res.json(contact);
  });
});

//postContacts
router.post("/contact", (req, res, next) => {
  let newContact = new contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone
  });

  newContact.save(function(err, contact) {
    if (err) {
      res.json({ msg: err });
    } else {
      res.json({ msg: "Contact added Successfully" });
    }
  });
});

router.delete("/contact/:id",(req,res,next)=>{
    contact.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})
module.exports = router;
