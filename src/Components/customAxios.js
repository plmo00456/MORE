import axios from 'axios'; // 액시오스

export default function customAxios(url, callback) {
  axios(
    {
      url: '/api' + url,
      method: 'post',

      //운용시 무조건 삭제
      baseURL: 'http://localhost:8080',
      withCredentials: true,
    }
  ).then(function (response) {
    callback(response.data);
  });
}
