var { User } = require("../model/schema");
const HTTP = require("../../constant/response.constant");

require("dotenv").config();

class class1 {

  static Registration = async (req, res) => {
    try {
      if (req.body.Mail) {

        var Employee = await User.findOne({
            Mail: req.body.Mail
          });
  
          if (!Employee) {

            let data = new User({
                Mail: req.body.Mail
            });
  
            await data.save();
  
            var a = {
              message: "Account Create Successfully",
              code: `${HTTP.SUCCESS}`,
            };
            res.status(HTTP.SUCCESS).json(a);
          } else {
            var a = {
              message: "Account Already Exist",
              code: `${HTTP.CONFLICT}`,
            };
            res.status(HTTP.CONFLICT).json(a);
          }

      } else {
        var a = { message: "Insufficient Data", status: `${HTTP.BAD_REQUEST}` };
        res.status(HTTP.BAD_REQUEST).json(a);
      }
    } catch (e) {
      console.log(e);

      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };

  static SignIn = async (req, res) => {
    try {
      if (req.body.Mail) {

        var Employee = await User.findOne({
            Mail: req.body.Mail
          });
  
          if (!Employee) {

            let data = new User({
                Mail: req.body.Mail
            });
  
            await data.save();
  
            var a = {
              message: "Account Create Successfully",
              code: `${HTTP.SUCCESS}`,
            };
            res.status(HTTP.SUCCESS).json(a);
          } else {
            var a = {
              message: "Account Already Exist",
              code: `${HTTP.CONFLICT}`,
            };
            res.status(HTTP.CONFLICT).json(a);
          }

      } else {
        var a = { message: "Insufficient Data", status: `${HTTP.BAD_REQUEST}` };
        res.status(HTTP.BAD_REQUEST).json(a);
      }
    } catch (e) {
      console.log(e);

      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };

}

module.exports = { class1 };
