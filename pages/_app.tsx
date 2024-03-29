// @ts-nocheck
import { getTheme } from '@/components/layout/Theme';
import '@/styles/globals.css';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import nextI18NextConfig from '../next-i18next.config.js';

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  let theme = getTheme()
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig)