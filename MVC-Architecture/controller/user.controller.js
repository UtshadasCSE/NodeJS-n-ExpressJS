exports.getUser = (req, res) => {
  res.send("Hello Users");
};
exports.saveUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
};
