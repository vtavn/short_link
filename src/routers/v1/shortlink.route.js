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
  
router.route('/delete/:short')
  .delete(UrlController.deleteShort)
 
export const UrlRoutes = router
