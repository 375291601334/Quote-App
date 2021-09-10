const findUserByName = (name) => {
  const users = [
    {
      userId: 1,
      username: 'test',
      password: 'testPassword',
    },
    {
      userId: 2,
      username: 'admin',
      password: 'adminPassword',
    },
  ];

  return users.find((user) => user.username === name);
}

module.exports = {
  findUserByName,
};
