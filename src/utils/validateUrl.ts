const isUrlValid = async (originalUrl: string) => {
  const res = originalUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if (res == null) return false;
  return true;
};

export default isUrlValid;
