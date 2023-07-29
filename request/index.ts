import { MJMessage } from "midjourney";

const streamFetch = async (
  url: string,
  body: string,
  loading?: (uri: MJMessage) => void
) => {
  console.log(url)
  console.log(body)
  console.log(loading)
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body,
  });
  console.log("response: ", response)
  const reader = response.body?.getReader();
  console.log("reader: ", reader)
  let buffer = "";
  if (reader) {console.log("reader exit")
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      buffer += new TextDecoder("utf-8").decode(value);

      let startIdx = 0;
      let endIdx = buffer.indexOf("}");
      while (endIdx !== -1) {
        const jsonString = buffer.substring(startIdx, endIdx + 1);
        try {
          const parsedMessage = JSON.parse(jsonString);
          loading && loading(parsedMessage);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
        startIdx = endIdx + 1;
        endIdx = buffer.indexOf("}", startIdx);
      }
      buffer = buffer.slice(startIdx);
      console.log("here-buffer", buffer)
    }
  } else {
    console.log("Response body is null");
  }
};

export const Imagine = (body: string, loading?: (uri: MJMessage) => void) => {
  return streamFetch("api/imagine/", body, loading);
};

export const Upscale = (body: string, loading?: (uri: MJMessage) => void) => {
  return streamFetch("api/upscale/", body, loading);
};

export const Variation = (body: string, loading?: (uri: MJMessage) => void) => {
  return streamFetch("api/variation/", body, loading);
};

