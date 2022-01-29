const path = require("path");

const uploadImage = async (req, res) => {
  let image = req.files.image;
  console.log(image);
  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${image.name}`
  );
  await image.mv(imagePath);
  return res.json({ image: { src: `/uploads/${image.name}` } });
};
module.exports = { uploadImage };
