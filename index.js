require("dotenv").config();
const axios = require("axios").default;
const fs = require("fs");

const fetcher = async (url, token) => {
  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result?.data;
};

const worker = async (url, isWriteHeader) => {
  console.log("Fetching data from:", url);
  const data = await fetcher(url, process.env.ACCESS_TOKEN);
  const columnHeaders = data.columnHeaders.map((item) => item.name);
  const nextLink = data.nextLink;

  if (isWriteHeader) {
    fs.appendFileSync(
      "result.csv",
      columnHeaders.join(", ") + "\n",
      function (err) {
        if (err) throw err;
      }
    );
  }

  data.rows.forEach((row) => {
    fs.appendFileSync("result.csv", row.join(", ") + "\n", function (err) {
      if (err) throw err;
    });
  });

  if (nextLink) {
    worker(nextLink, false);
  } else {
    console.log("done!");
  }
};

worker(process.env.GA_ENDPOINT, true);
