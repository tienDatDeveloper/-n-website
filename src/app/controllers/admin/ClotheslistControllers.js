// const Food = require('../models/Food');
// const adv_model = require('../models/Adv');
// const { multipleMongooseToOject } = require('../../../util/mongoose');
// const { mongooseToObject } = require('../../../util/mongoose');
// const multer = require('multer');

const ClothesList = require('../../models/Clotheslist');
const {mongooseToObject,mutipleMongooseToObject,} = require("../../../utill/mongoose");

class ClotheslistController {
  //[GET] /food
  // index(req, res, next) {
  //     Promise.all([
  //         Food.find({}),
  //         adv_model.find({})
  //     ])
  //     .then(([food, adv]) => {
  //         res.render('home', {
  //             food: multipleMongooseToOject(food),
  //             adv: multipleMongooseToOject(adv)
  //         })
  //     })
  //     .catch(next);
  // }

  show(req, res, next) {
    ClothesList.find({})
        .then((clothestype) => {
          clothestype = clothestype.map(clothestype => clothestype.toObject())
            res.render('clotheslist/clotheslist', {
              clothestype,
                layout: 'admain'
            })

        })
        .catch(next);
  }
  
  create(req, res, next) {
    res.render("clotheslist/create", { layout: "admain" });
  }

  store(req, res, next) {
      const clotheslist = ClothesList({
          name: req.body.name,
          description: req.body.description,
          image: req.file.filename,
          price: req.body.price,
      })
      clotheslist.save({})
          .then(() => res.render('clotheslist/store', { layout: 'admain' }))
          .catch(next);
  }

  // store(req, res) {
  //   const formData = req.body;
  //   const clotheslist = new ClothesList(formData);
  //   clotheslist.save();
  //   res.render('clotheslist/store',{layout: 'admain'});
  // } 


  edit(req, res, next) {
    ClothesList.findById({ _id: req.params.id })
          .then((clotheslist) => {
              res.render('clotheslist/edit', { food: mongooseToObject(clotheslist), layout: 'admain' })
          })
          .catch(next);
  }

  // async update(req, res, next) {
  //     const ClothesList = await ClothesList.updateOne({ _id: req.params.id }, {
  //         name: req.body.name,
  //         description: req.body.description,
  //         price: req.body.price,
  //         image: req.file.filename,
  //     })
  //         .then(() => res.redirect('../clotheslist'))
  //         .catch((err) => {
  //             res.status(400).json(err)
  //         })

  // }
  update(req, res, next) {
    ClothesList.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/admin/clotheslist'))
        .catch(next);
}

  delete(req, res, next) {
    ClothesList.deleteOne({ _id: req.params.id })
          .then(() => res.redirect('back'))
          .catch(next);
  }
}

module.exports = new ClotheslistController();
