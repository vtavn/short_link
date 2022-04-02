import express from 'express'
import { UrlController } from './../../controllers/url.controller'

const router = express.Router()

/**
 * /v1/short/create 
 */
router.route('/create')
  .post(UrlController.createNew)

export const UrlRoutes = router
