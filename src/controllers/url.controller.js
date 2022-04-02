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
    try {
      const createLinkSuccess = await url.createNew(param.link, shortLink, param.password)
      
      const dataNew = {
        status: true,
        message: 'Link Success!',
        data: {
          originUrl: createLinkSuccess.originUrl,
          shortUrl: base_url + createLinkSuccess.shortUrl,
          totalView: createLinkSuccess.totalView
        }
      }
      return res.status(HttpStatusCode.OK).json(dataNew)
    } catch (error) {
      return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ status: false, message: error })
    }
  } else {
    return res.status(HttpStatusCode.UNAUTHENTICATED).json({ status: false, message: 'Invalid longUrl' })
  } 
}

const showAll = async (req, res) => {
  try {
    const getAll = await url.getAll()
    console.log(getAll);
    if (!getAll) {
      return res.status(HttpStatusCode.OK).json({ status: true, message: 'Data not found' })
    } else {
      const allData = {
        status: true,
        message: 'Get Data Success',
        data: getAll
      }
      return res.status(HttpStatusCode.OK).json(allData)
    }

  } catch (error) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ status: false, message: error })
  }
}

export const UrlController = {
  createNew,
  showAll
}