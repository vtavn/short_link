import express from 'express'
import { ShortLinkRoutes } from './shortlink.route'

const router = express.Router()

/**
 * GET /v1/
 */
router.get('/', (req, res) => res.status(200).json({ msg: 'OK!' }))

/**
 * Short Url
 */
router.use('/short', ShortLinkRoutes)

export const apiV1 = router