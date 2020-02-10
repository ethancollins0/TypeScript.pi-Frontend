export default class ValidateToken {
  checkToken = (baseUrl: string) => {
    return fetch(baseUrl + "/validate", {
      method: "POST",
      credentials: "include"
    }).then(res => {
      if (!res || res.status != 200) {
        return false;
      }
      return true;
    });
  };
}
