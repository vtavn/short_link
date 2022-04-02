import { HttpStatusCode, RandomString } from './../utils/constants.utils'
import validUrl from 'valid-url'

const createNew = async (req, res) => {
  const param = req.body

  //base url
  const base_url = `${req.protocol}://${process.env.HOST}:${process.env.PORT}/`
  
  // check url input
  if (validUrl.isUri(param.link)) {
    const shortLink = RandomString(5)
    const dataNew = {
      status: true,
      longUrl: param.link,
      shortUrl: base_url + shortLink,
      createdAt: Date.now()
    }
    res.status(HttpStatusCode.OK).send(dataNew)
  } else {
    res.status(HttpStatusCode.UNAUTHENTICATED).send('Invalid longUrl')
  }
  
}

export const ShortLinkController = {
  createNew
}