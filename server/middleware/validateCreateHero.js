function validateCreateHero(req, res, next) {
  const { nickname, realName, originDescription, superpowers, catchPhrase } =
    req.body;

  const id = req.params;

  const listFiles = req.files

  const minLimitImages = 1

  const maxLimitImages = 5

  const missingFields = [];

  

  if (!nickname) {
    missingFields.push("nickname");
  }
  if (!realName) {
    missingFields.push("realName");
  }
  if (!originDescription) {
    missingFields.push("originDescription");
  }
  if (!superpowers) {
    missingFields.push("superpowers");
  }
  if (!catchPhrase) {
    missingFields.push("catchPhrase");
  }
  if (!id) {    
    if (!listFiles) {
      missingFields.push("Image");
    }
    if (listFiles <= minLimitImages || istFiles > maxLimitImages){
        missingFields.push(`minimum - maximum images ${minLimitImages} - ${maxLimitImages}`);
    }    
  }

  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({
        error: `The following fields are required: ${missingFields.join(", ")}`,
      });
  }

  next();
}

module.exports = {
  validateCreateHero,
};
