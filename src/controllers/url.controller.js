import { HttpStatusCode, RandomString } from '../utils/constants.utils'
import validUrl from 'valid-url'
import { url } from '../services/index'


const deleteShort = async (req, res) => {
  const param = req.params
  try {
    const findShort = await url.getShortOne(param.short)
    if(findShort) {
      const deleteShort = await url.deleteShort(findShort.shortUrl)
      if (deleteShort) {
        return res.status(HttpStatusCode.OK).json({ status: true, message: 'Delete Success' })
      } else {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ status: false, message: 'Server Error Connect.' })
      }
    } else {
      return res.status(HttpStatusCode.BAD_REQUEST).json({ status: false, message: 'Short Link Not Found.' })
    }
  } catch (error) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ status: false, message: error })
  }
}

const showAll = async (req, res) => {
  try {
    const getAll = await url.getAll()
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


const getOriginShort = async (req, res) => {
  const param = req.body
  try {
    const findShort = await url.findAndUpdateShort(param.shortUrl)
    if(findShort) {
      const dataShow = {
        originUrl: findShort.originUrl,
        totalView: findShort.totalView,
        lastViewAt: findShort.lastViewAt,
        updatedAt: findShort.updatedAt,
        createdAt: findShort.createdAt
      }
      if (findShort.passwords) {
        if (param.password === findShort.passwords) {
          return res.status(HttpStatusCode.OK).json({ status: true, message: 'Get Success', data : dataShow})
        } else {
          return res.status(HttpStatusCode.UNAUTHENTICATED).json({ status: false, message: 'Password Error.' })
        }
      } else {
        return res.status(HttpStatusCode.OK).json({ status: true, message: 'Get Success', data : dataShow})
      }
    } else {
      return res.status(HttpStatusCode.BAD_REQUEST).json({ status: false, message: 'Short Link Not Found.' })
    } 
  } catch (error) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ status: false, message: error })
  }
}

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


export const UrlController = {
  createNew,
  showAll,
  deleteShort,
  getOriginShort
}