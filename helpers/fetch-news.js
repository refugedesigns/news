import axios from '../utils/axios'


export const fetchFirstPage = async () => {
    const response = await axios.get(
      `/category?section=alltickers&items=50&token=${process.env.API_KEY}`
    )
    const firstNews = response.data

    return firstNews
}

export const fetchSecondPage = async () => {
  const response = await axios.get(
    `/category?section=alltickers&items=50&page=2&token=${process.env.API_KEY}`
  );
  const secondNews = response.data 
  return secondNews
}

export const fetchThirdPage = async () => {
  const response = await axios.get(
    `/category?section=alltickers&items=50&page=3&token=${process.env.API_KEY}`
  );
  const thirdNews = response.data;
  return thirdNews;
};

export const fetchForthPage = async () => {
  const response = await axios.get(
    `/category?section=alltickers&items=50&page=4&token=${process.env.API_KEY}`
  );
  const forthNews = response.data;
  return forthNews;
};

export const fetchFifthPage = async () => {
  const response = await axios.get(
    `/category?section=alltickers&items=50&page=5&token=${process.env.API_KEY}`
  );
  const fifthNews = response.data;
  return fifthNews;
};


export const fetchAllNews = async () => {
  const first = await fetchFirstPage()
  const firstData = first.data

  const second = await fetchSecondPage()
  const secondData = second.data

  const third = await fetchThirdPage()
  const thirdData = third.data

  const forth = await fetchForthPage()
  const forthData = forth.Data 

  const fifth = await fetchFifthPage()
  const fifthData = fifth.data

  const allNews = firstData.concat(secondData, thirdData, forthData, fifthData)
  return allNews
};






