const axios = require("axios");
const api = [{}, {}];
module.exports = {
  getAns: (req, res) => {
    res.status(200);
    res.send({
      mensaje: "Hola Mundo",
    });
  },
  getSuma: (req, res) => {
    if ("num1" in req.query && "num2" in req.query) {
      if (typeof parseInt(req.query.num1) != "number") {
        res.status(400);
        res.send({
          mensaje: "El tipo de dato del primer dato es incorrecto.",
        });
        return;
      }
      if (typeof parseInt(req.query.num2) != "number") {
        res.status(400);
        res.send({
          mensaje: "El tipo de dato del primer dato es incorrecto.",
        });
        return;
      }

      res.status(200);
      res.send({
        resultado: parseInt(req.query.num1) + parseInt(req.query.num2),
      });
    } else {
      res.status(404);
      res.send({
        mensaje: "no se encontraron los numeros",
      });
    }
  },
  getName: async (req, res) => {
    const num = req.params.number;
    axios.get("https://swapi.dev/api/people/"+num)
      .then((data) => {
        const pj = data.data;
        res.status(200);
        res.send({
          personaje: pj,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("error al obtener los datos");
      });
  },
  putUser: (req,res) => {
    
    const  user = req.body;
    res.status(200);
    res.send({
        user
    });

  }
  ,postSumamod: (req, res) => {
    data = req.body;
  
      if (typeof parseInt(data.num1) != "number" ||typeof parseInt(data.num2) != "number") {
        res.status(400);
        res.send({
          mensaje: "El tipo de dato del primer dato es incorrecto.",
        });
        return;
      }
      res.status(200);
      res.send({
          resultado: data.num1 + data.num2
      });
    },
    deleteId: (req,res) => {
      const id = req.params.id;
      for(i in id){
        if(id[i] == '3'){
          res.status(200);
          res.send({
            mensaje: "se ha eliminado el objeto con ID 3",
          });
          return;
        }
      }
      res.status(404);
      res.send({
          mensaje: "No se encontró el objeto con el ID especificado."
        });
        return;

    }
};
