import * as React from 'react'
import {
  Body, Container, Head,
  Heading, Hr, Html,
  Link, Preview,
  Section, Text
} from '@react-email/components'

interface RaycastMagicLinkEmailProps {
  magicLink?: string;
}

export const RaycastMagicLinkEmail = ({
  magicLink
}: RaycastMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Log in with this magic link.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Confirm your email address</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            Thank you for using our platform. We want to make sure it's really you. Click the button below to verify your account.
          </Text>
          <Text style={paragraph}>
            <Link style={link} href={magicLink}>
              Click here to sign in
            </Link>
          </Text>
          <Text style={paragraph}>
            If you didn't request this, please ignore this email.
          </Text>
        </Section>
        <Text style={paragraph}>Best,<br />- SaasLab Team</Text>

        <Hr style={hr} />

        <Text style={footer}>SaaS Lab</Text>
        <Text style={footer}>Copyright &copy; 2024 - All right reserved</Text>
      </Container>
    </Body>
  </Html>
)

RaycastMagicLinkEmail.PreviewProps = {
  magicLink: 'http://localhost:3000/dashboard/profile'
} as RaycastMagicLinkEmailProps

export default RaycastMagicLinkEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
  margin: '0 auto',
  padding: '20px 25px 48px',
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat, no-repeat'
}

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px'
}

const body = {
  margin: '24px 0'
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px'
}

const link = {
  display: 'inline-block',
  backgroundColor: '#0f172a',
  padding: '10px 20px',
  borderRadius: '4px',
  color: 'white',
  textDecoration: 'none',
  margin: '5px auto'
}

const hr = {
  borderColor: '#dddddd',
  marginTop: '29px'
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginLeft: '4px'
}
