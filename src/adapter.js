import fetch from 'isomorphic-fetch';

export default class Adapter {
  call(url) {
    return fetch(
      url,
      {
        body: environment.body,
        header: environment.header,
        method: environment.method
      }
    ).then((response) => {
      return response.json(),then((body) => {
        return {
          body: response.body,
          header: response.header,
          status: response.status
        }
      })
    })
  }
}
