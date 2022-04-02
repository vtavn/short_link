export const HttpStatusCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}

export const RandomString = (length) => {
    const defaultCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = defaultCharset.length;
    let result = '';
    for(let i = 0; i < length; i++ ) {
      result += defaultCharset.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}