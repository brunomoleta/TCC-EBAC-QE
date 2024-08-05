const password = "psw!ebac@test";
function generateRandomCharacter() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}

const randomUser = {
  email: `${generateRandomCharacter()}-${Math.random()}_ebac`,
  password,
};
const successUser = {
  email: "user_ebac@gmail.com",
  password,
};

module.exports = { randomUser, successUser };
