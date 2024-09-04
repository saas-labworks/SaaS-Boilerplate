import { AppLinks } from '@/content'
import { globalConfig } from '@/global.config'
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Hr
} from '@react-email/components'
import * as React from 'react'

interface CompletePaymentEmailProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  interestingLinks?: {
    text: string;
    url: string;
  }[];
  legalLinks?: {
    text: string;
    url: string;
  }[];
}

const baseUrl = globalConfig.app.host

const PropDefaults: CompletePaymentEmailProps = {
  steps: [
    {
      id: 1,
      Description: (
        <li className='mb-20' key={1}>
          <strong>Deploy your first project faster.</strong>{' '}
          Simply use own boilerplate for your project and start to build your startup in few days.
        </li>
      )
    },
    {
      id: 2,
      Description: (
        <li className='mb-20' key={2}>
          <strong>Principal technologies</strong>
          Start building with the prinicipal technologies, always priorizing the low cost.
        </li>
      )
    },
    {
      id: 3,
      Description: (
        <li className='mb-20' key={4}>
          <strong>Awesome CLI.</strong>
          Do you want to use other tools? No resend? Maybe SES? No problem. The CLI can customize your templates and build your startup with differents options.
        </li>
      )
    }
  ],
  interestingLinks: [
    { text: 'Testimonials', url: `${baseUrl}/#testimonials` },
    { text: 'More features', url: `${baseUrl}/#features` },
    { text: 'Contact support', url: `${baseUrl}/#support` }
  ],
  legalLinks: [
    { text: 'Terms of Service', url: `${baseUrl}/tos` },
    { text: 'Privacy Policy', url: `${baseUrl}/privacy-policy` },
    { text: 'AI Policy', url: `${baseUrl}/ai-policy` }
  ]
}

export const CompletePaymentEmail = ({
  steps = PropDefaults.steps,
  interestingLinks = PropDefaults.interestingLinks,
  legalLinks = PropDefaults.legalLinks
}: CompletePaymentEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{globalConfig.app.name} Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#0f172a',
                muted: '#64748b',
                offwhite: '#fafbfb'
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px'
              }
            }
          }
        }}
      >
        <Body className='bg-offwhite text-base font-sans'>
          <Img
            src={`${baseUrl}/static/netlify-logo.png`}
            width='184'
            height='75'
            alt={globalConfig.app.name}
            className='mx-auto my-20'
          />
          <Container className='bg-white p-45'>
            <Heading className='text-center my-0 leading-8'>
              Welcome to {globalConfig.app.name}
            </Heading>

            <Section>
              <Row>
                <Text className='text-base'>
                  Thanks you for subscribing us 🎉. We're thrilled to have you on board and be part of your journey towards creating a startup as an indie hacker.
                </Text>

                <Text className='text-base'>Below is a summary of what awaits you with us.</Text>
              </Row>
            </Section>

            <ul>{steps?.map(({ Description }) => Description)}</ul>

            <Section className='text-center my-12'>
              <Link
                href={AppLinks.Dashboard}
                className='bg-brand text-white rounded-lg py-3 px-[18px]'
                target='_blank' rel='noreferrer'
              >
                Go to your dashboard
              </Link>
            </Section>

            <Section className='mt-45'>
              <Row>
                {interestingLinks?.map((link, i) => (
                  <Column key={i}>
                    <Link
                      href={link.url}
                      className='text-black underline font-bold'
                      target='_blank' rel='noreferrer'
                    >
                      {link.text}
                    </Link>{' '}
                    <span className='text-green-500'>→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className='my-20'>
            <Hr className='border-t-1 border-solid border-gray-300' />
            <Text className='text-muted'>SaaS Lab</Text>
            <Text className='text-muted'>Copyright &copy; 2024 - All right reserved</Text>
            <Row>
              {legalLinks?.map((link, i) => (
                <Column key={i}>
                  <Link
                    href={link.url}
                    className='text-muted underline'
                    target='_blank' rel='noreferrer'
                  >
                    {link.text}
                  </Link>{' '}
                  <span className='text-muted'>→</span>
                </Column>
              ))}
            </Row>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default CompletePaymentEmail
