import { OnePaymentPlansDetails, SubscriptionPlansDetails } from '@/interface/pricing'

export const subscriptionPlansDetails: SubscriptionPlansDetails[] = [
  {
    title: 'Starter',
    description: 'Perfect for individuals and small teams.',
    price: {
      monthly: {
        value: 15,
        buy_url: 'https://buy.stripe.com/test_fZe29c6vi5BY5Wg8wz',
        price_id: 'price_1PnKOZCCO85LUEYfbtHG4qxg'
      },
      yearly: {
        value: 12, // 144 yearly
        buy_url: 'https://buy.stripe.com/test_bIY0148Dq5BY70k7su',
        price_id: 'price_1PnKNoCCO85LUEYfG9nieyo4'
      }
    },
    featured: false,
    features: [
      { text: '1 user', included: true },
      { text: '5 GB storage', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Custom Support', included: true },
      { text: 'Custom Integrations', included: true }
    ]
  },
  {
    title: 'Pro',
    description: 'For growing teams and businesses.',
    price: {
      monthly: {
        value: 29,
        buy_url: 'https://buy.stripe.com/test_6oEg024na1lI4SceUY',
        price_id: 'price_1Pne2YCCO85LUEYfAzWIAHLS'
      },
      yearly: {
        value: 20, // 240 yearly
        buy_url: 'https://buy.stripe.com/test_dR6aFIdXKd4q2K4149',
        price_id: 'price_1PwD5yCCO85LUEYfDZJrK2va'
      }
    },
    featured: false,
    features: [
      { text: '5 users', included: true },
      { text: '50 GB storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom reports', included: true },
      { text: 'Custom Integrations', included: true }
    ]
  }
]

export const onePaymentPlansDetails: OnePaymentPlansDetails[] = [
  {
    title: 'Basic',
    description: 'Pay one time, your forever',
    price: {
      value: 42,
      buy_url: 'https://buy.stripe.com/test_fZe29c6vi5BY5Wg8wz',
      price_id: 'price_1PnKOZCCO85LUEYfbtHG4qxg'
    },
    featured: false,
    features: [
      { text: '1 user', included: true },
      { text: '5 GB storage', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Custom Support', included: true },
      { text: 'Custom Integrations', included: true }
    ]
  },
  {
    title: 'Pro',
    description: 'Your forever and recive future updateds',
    price: {
      value: 50,
      buy_url: 'https://buy.stripe.com/test_6oEg024na1lI4SceUY',
      price_id: 'price_1Pne2YCCO85LUEYfAzWIAHLS'
    },
    featured: false,
    features: [
      { text: '5 users', included: true },
      { text: '50 GB storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom reports', included: true },
      { text: 'Custom Integrations', included: true }
    ]
  }
]

export const CUSTOMER_PORTAL_LINK = 'https://billing.stripe.com/p/login/test_aEU5ku6NG9WYces000'
