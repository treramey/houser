module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get("db");
    db.get_houses()
      .then((houses) => {
        res.status(200).json(houses);
      })
      .catch((err) => {
        res
          .status(500)
          .send(
            console.log(
              `The problem with troubleshooting is that trouble shoots back. ${err}`
            )
          );
      });
  },
  addHouses: (req, res) => {
    const db = req.app.get("db");
    const { name, address, city, state, zipcode } = req.body;
    db.add_house(name, address, city, state, zipcode)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res
          .status(500)
          .send(
            console.log(
              `The problem with troubleshooting is that trouble shoots back. ${err}`
            )
          );
      });
  },
  deleteHouses: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.remove_houses(id)
      .then((house) => {
        res.status(200).json(house);
      })
      .catch((err) => {
        res
          .status(500)
          .send(
            console.log(
              `The problem with troubleshooting is that trouble shoots back. ${err}`
            )
          );
      });
  },
};
