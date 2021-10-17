const ClothesType = require('../../models/Clothestype');
const {mongooseToObject,mutipleMongooseToObject,} = require("../../../utill/mongoose");

class typeClothesControllers {
   show(req, res, next) {
    ClothesType.find({})
        .then((clothestype) => {
          clothestype = clothestype.map(clothestype => clothestype.toObject())
            res.render('clothestypelist/clothestypelist', {
              clothestype,
                layout: 'admain'
            })

        })
        .catch(next);
}

  createtype(req, res) {
    res.render("clothestypelist/createtype", { layout: "admain" });
  }


  store(req, res) {
    const formData = req.body;
    const clothestype = new ClothesType(formData);
    clothestype.save();
    res.render('clothestypelist/store',{layout: 'admain'});
  } 

  edit(req, res, next) {
    ClothesType.findById({_id: req.params.id})
        .then((clothestype)=>{
            res.render('clothestypelist/edit',{layout: 'admain', 
            clothestype: mongooseToObject(clothestype) 
            })
        })
        .catch(next);
}

  update(req, res, next) {
    ClothesType.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/admin/clothestypelist'))
        .catch(next);
}

  delete(req, res, next) {
    ClothesType.deleteOne({ _id: req.params.id },req.body)
      .then(() => res.redirect('back'))
      .catch(next);
  }

}
module.exports = new typeClothesControllers();
