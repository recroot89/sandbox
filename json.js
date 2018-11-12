import { get, post } from 'hexlet-http-request';

// BEGIN (write your solution here)
export default (getServersUrl, updateValueUrl) =>
  get(getServersUrl)
    .then((res) => {
      const serverList = JSON.parse(res.data);
      const arrayOfServersStatus = serverList.map(server => get(`${server.url}/status`));
      return Promise.all(arrayOfServersStatus);
    })
    .then((status) => {
      const serverWorkload = status.map(res => JSON.parse(res.data));
      let lowestWorkload = serverWorkload[0];
      serverWorkload.slice(1).forEach(current =>
        current.workload < lowestWorkload.workload ? lowestWorkload = current : current);
      return post(updateValueUrl, { value: `${lowestWorkload.url}` });
    })
    .catch(err => console.log(err));
// END
