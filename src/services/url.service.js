import UrlModel from '../models/url.model'

const createNew = (originUrl, shortUrl, passwords) => {
  return new Promise( async (resolve, reject) => {
    try {
      const currentUrl = await UrlModel.findOne({ originUrl })
      if (currentUrl) {
        resolve(currentUrl)
      } else {
        const dataItem = new UrlModel({
          originUrl: originUrl,
          shortUrl: shortUrl,
          passwords: passwords
        })
        const createLink = await dataItem.save()
    
        resolve(createLink)
      }
    } catch (error) {
      reject(error);
    }
  })
}

const getShortOne = (shortUrl) => {
  return new Promise( async (resolve, reject) => {
    try {
      const findOne = await UrlModel.findOne({ shortUrl: shortUrl })
      resolve(findOne)
    } catch (error) {
      reject(error)
    }
  })
}

const deleteShort = (shortUrl) => {
  return new Promise( async (resolve, reject) => {
    try {
      const deleteShort = await UrlModel.deleteOne({ shortUrl: shortUrl})
      resolve(deleteShort)
    } catch (error) {
      reject(error)
    }
  })
}

const getAll = () => {
  return new Promise( async (resolve, reject) => {
    try {
      const getAll = await UrlModel.find()
      resolve(getAll)
    } catch (error) {
      reject(error)
    }
  })
}

const findAndUpdateShort = (shortUrl) => {
  return new Promise( async (resolve, reject) => {
    try {
      const findShort = await UrlModel.findOneAndUpdate({ shortUrl: shortUrl }, { $inc: { totalView: 1 }, lastViewAt: Date.now() })
      resolve(findShort)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  createNew,
  getAll,
  getShortOne,
  deleteShort,
  findAndUpdateShort
}
