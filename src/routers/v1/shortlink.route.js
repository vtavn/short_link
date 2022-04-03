import express from 'express'
import { UrlController } from './../../controllers/url.controller'

const router = express.Router()

/**
 * /v1/short/create 
 */
router.route('/create')
  .post(UrlController.createNew)

/**
 * /v1/short/all
 */
router.route('/all')
  .get(UrlController.showAll)

/**
 * /v1/short/delete/:short
 */
router.route('/delete/:short')
  .delete(UrlController.deleteShort)

/**
 * /v1/short/info/:short
 */
router.route('/info')
  .post(UrlController.getOriginShort)

export const UrlRoutes = router
