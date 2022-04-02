import { HttpStatusCode } from './../utils/constants.utils'
import validUrl from 'valid-url'

const createNew = async (req, res, next) => {
  console.log(req.body)
}

export const UrlValidation = {
  createNew
}