import Axios from 'axios';

function getCpuOptionFromApi(matches) {
  const state = matches.join('').toUpperCase();
  return Axios.get(`https://smartplay.afiniti.com/v1/play/${state}`);
}

export default getCpuOptionFromApi;
