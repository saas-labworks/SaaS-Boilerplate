import Stripe from 'stripe'
import { AppConstants } from '../config'

export const stripe = new Stripe(AppConstants.StripeSecretKey, {
  apiVersion: '2024-06-20'
})
