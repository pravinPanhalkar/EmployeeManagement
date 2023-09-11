import commonUtil from "../Utils/common";
import axios from "../Utils/axios-config";

const getData = async () => {
  let result = {
    data: "",
    error: "",
  };

  let url = "/posts";
  let data = {};
  let headerData = [];

  let config = commonUtil.getUrlConfig("POST", url, data, headerData);
  await axios(config)
    .then((resp) => {
      console.log(resp);
      if (resp.status === 200) {
        result.data = resp.data;
        result.error = false;
      }
    })
    .catch(function (error) {
      result.error = true;
      console.log(error);
    });
  return result;
};

export default {
  getData,
};
