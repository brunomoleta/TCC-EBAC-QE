const password = "psw!ebac@test";
function generateRandomCharacter() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}

const user = {
  email: `${generateRandomCharacter()}-${Math.random()}_ebac`,
  password,
};

module.exports = { user };
