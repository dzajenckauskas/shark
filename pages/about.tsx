import Layout from '@/components/layout/Layout'
import Typography from '@mui/material/Typography'
import Head from 'next/head'


export default function About() {
  return (
    <>
      <Head>
        <title>{"About"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Typography variant='h4' fontWeight={600}>
          ABOUT
        </Typography>
      </Layout>
    </>
  )
}
