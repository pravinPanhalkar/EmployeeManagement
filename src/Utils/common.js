const getUrlConfig = (type, url, data, headerData) => {
  let headers = {};
  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";
  headers["Access-Control-Allow-Origin"] = "*";

  if (headerData.length > 0) {
    headerData.map((singleHeader) => {
      headers[singleHeader.key] = singleHeader.value;
    });
  }

  let config = {
    method: type,
    url: url,
    data: data,
    headers: headers,
  };
  return config;
};

export default { getUrlConfig };
