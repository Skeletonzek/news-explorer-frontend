const months = ['января', 'февраля', 'марта', 'апреля','мая','июня','июля','авгуса','сентября','октября','ноября','декабря'];

export const dateNow = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return(`${year}-${month + 1}-${day}`);
}

export const dateWeekAgo = () => {
  const dateWeekAgoMs = Date.now() - 604800000;
  const date = new Date(dateWeekAgoMs);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return(`${year}-${month + 1}-${day}`);
}

export const dateNews = (dateFromApi = "2021-01-23T01:06:27Z") => {
  const date = new Date(dateFromApi);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return(`${day} ${months[month]}, ${year}`);
}