import express from 'express'
import { ShortLinkController } from './../../controllers/shortlink.controller'

const router = express.Router()

/**
 * /v1/short/create 
 */
router.route('/create')
  .post(ShortLinkController.createNew)

export const ShortLinkRoutes = router
