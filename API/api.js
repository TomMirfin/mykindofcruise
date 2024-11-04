export const getAdventures = async () => {
  const response = await fetch("https://jjzl6.wiremockapi.cloud/adventures");
  const data = await response.json();

  return data;
};

export const getCruises = async () => {
  const response = await fetch(" https://jjzl6.wiremockapi.cloud/cruises");
  const data = await response.json();
  return data;
};
