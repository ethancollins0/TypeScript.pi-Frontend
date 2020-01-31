export default class StatusCodes {
  checkCodes = (res: any) => {
    return res.status == 200 ? res.json() : res.status;
  };
}
