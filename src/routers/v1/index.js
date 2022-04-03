import express from 'express'
import { UrlRoutes } from './shortlink.route'
import { UrlController } from './../../controllers/url.controller'

const router = express.Router()

/**
 * GET /v1/
 */
router.get('/', (req, res) => res.status(200).json({ message: 'Short Link!' }))

/**
 * Short Url
 */
router.use('/short', UrlRoutes)

export const apiV1 = router