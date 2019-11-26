import request from 'superagent';
import { StatusType } from "../types";

const fetchCountries = () => {
  return new Promise((resolve, reject) => {
    request
      .get('/api/all?fields=name;alpha2Code;alpha3Code')
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
  countries: wrapPromise(fetchCountries())
})