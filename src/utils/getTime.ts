export const getTime = () => {
  const time = new Date().getHours();

  if (time >= 5 && time < 12) {
    return "🌅 Good Morning!";
  } else if (time >= 12 && time < 17) {
    return "🌞 Good Afternoon!";
  } else if (time >= 17 && time < 21) {
    return "🌆 Good Evening!";
  } else {
    return "🌙 Good Night!";
  }
};
