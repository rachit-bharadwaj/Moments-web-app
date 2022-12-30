const partyModel= require("../models/partyModel");
 
const loadoptions = async(req,res)=>
{
  try{
     res.render('options');
  }
  catch(error)
  {
    console.log(error.message);
  }
}
 const addparty = async (req,res)=>
 {
    try{
        res.render('addparty')
    }
    catch(error)
    {
        console.log(error.message);
    }
 }
 const partylogin= async (req,res)=>
 {
    try{
        res.render('partylogin')
    }
    catch(error)
    {
        console.log(error.message);
    }
 }
const insertparty = async(req,res)=>
{
    try{
        const singleparty = new partyModel({
            name : req.body.name,
            venue : req.body.venue,
            date : req.body.date,
            time : req.body.time,
            partycode:req.body.partycode,
            budget:req.body.budget,
            smail:req.body.smail,
            spass:req.body.spass
            });
            const partycode=req.body.partycode;
            const partydata= await singleparty.save();
            if(partydata)
            {
                res.render('partyaddedsuccess',{message:partycode});
            }
            else{
                    res.send("Registration failed");
            }
    }
    catch(error)
    {
        console.log(error.message);
    }
}

const loadparty= async(req,res)=>
{
    const partycode1=req.body.partycode1;
    try{
         const partywithcode= await partyModel.find({partycode:partycode1});
         res.render('organizedparties',{student:partywithcode});           

    }
    catch(error)
    {
        console.log(error.message);
    }
}
const loadaddparticpants= async(req,res)=>
{
    try{
        const id= req.query.id;
        const user = await partyModel.findById({_id:id})
         res.render('addparticipants', {user : user})
    }
    catch(error)
    {
        console.log(error.message);
    }
}

const add_participants = async(req,res)=>
{
    try{
    const id=req.body.user_id;
    var mail=req.body.participant_contri;
    const student1=[
        {
               name:req.body.participant_name,
               contribution:req.body.participant_contri// its email
        }
    ]
     const user = await partyModel.findByIdAndUpdate({_id:id},{$push:{student:student1}});
     res.send("Added successfully");
  }
  catch(error)
 {
     console.log(error.message);
  }
}



module.exports= {
    loadoptions,
    addparty,
    partylogin,
    insertparty,
    loadparty,
    loadaddparticpants,
    add_participants
}