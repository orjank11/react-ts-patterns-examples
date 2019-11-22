import request from 'superagent';
import { StatusType } from "../types";

const fetchFleet = () => {
  return new Promise((resolve, reject) => {
    request
      .get('/api/path')
      .then((result) => {
        resolve(result.body);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

const wrapPromise = (promise: Promise<any>) => {
  let status: StatusType = "pending";
  let result = "";
  let suspender = promise.then((res) => {
    status = "success"
    result = res;
  }).catch((err) => {
    status = "error"
    result = err;
  });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    }
  }
}

export const createResource = () => ({
  emissionreporting: wrapPromise(fetchFleet())
})