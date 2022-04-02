import { HttpStatusCode, RandomString } from '../utils/constants.utils'
import validUrl from 'valid-url'
import { url } from '../services/index'

const createNew = async (req, res) => {

  const param = req.body

  //base url
  const base_url = `${req.protocol}://${process.env.HOST}:${process.env.PORT}/`
  
  // check url input
  if (validUrl.isUri(param.link)) {
    const shortLink = RandomString(process.env.LENGTH_SHORT_URL)

    const dataNew = {
      originUrl: param.link,
      shortUrl: shortLink,
      passwords: param.password
    }

    try {

      const createLinkSuccess = await url.createNew(param.link, shortLink, param.password)
      res.status(HttpStatusCode.OK).send(createLinkSuccess)

    } catch (error) {

      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ status: false, message: error , isError: true })
    
    }

  } else {
    res.status(HttpStatusCode.UNAUTHENTICATED).json({ status: false, message: "Invalid longUrl" })
  }
  


}

export const UrlController = {
  createNew
}