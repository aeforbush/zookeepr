const path = require('path');
const router = require('express').Router();

// get index html and open route to animals
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  // get animal html and open route to animals
  router.get("/animals", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/animals.html"));
  });
  
  router.get("/zookeepers", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/zookeepers.html"));
  });
  
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
  router.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

  module.export = router;