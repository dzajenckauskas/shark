import { getFooterMenuItems } from '@/app/getFooterMenuItems'
import { getHeaderMenuItems } from '@/app/getHeaderMenuItems'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import PinDropIcon from '@mui/icons-material/PinDrop'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { theme } from './Theme'

const Footer = () => {
    const dateNow = new Date()

    const headerMenuItems = getHeaderMenuItems()
    const footerMenuItems = getFooterMenuItems()

    const renderNavLinks = headerMenuItems?.map(link =>
        <Link href={`/${link.slug}`} key={link.name}>
            <Typography variant='body2' color={theme.palette.info.main}>
                {link.name}
            </Typography>
        </Link>
    )
    const renderFooterLinks = footerMenuItems?.map(link =>
        <Link href={`/${link.slug}`} key={link.name}>
            <Typography variant='body2' color={theme.palette.info.main}>
                {link.name}
            </Typography>
        </Link>
    )
    return (
        <>
            <Stack sx={{
                position: 'relative', zIndex: 11,
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px -2px 12px;',
                backgroundColor: theme.palette.primary.main,

            }}>
                <Stack direction={'row'}
                    sx={{
                        px: { xl: 2, md: 4, xs: 2 },
                        width: '100%', maxWidth: 'xl', mx: 'auto', py: 5
                    }}>
                    <Stack direction={{ md: 'row', xs: 'column' }} spacing={{ md: 2, xs: 8 }} justifyContent={'space-between'} width={'100%'} alignItems={'self-start'} pb={1}>

                        <Stack direction={{ sm: 'row', xs: 'column' }} spacing={{ md: 2, xs: 8 }} justifyContent={'space-evenly'} width={'100%'}>
                            <Stack width={'100%'}>
                                <Stack spacing={3} maxWidth={250} height={'100%'}>
                                    <Link href={'/'} >
                                        <Stack direction={'row'} spacing={1.5} sx={{ alignItems: 'center' }}>
                                            {/* <Image src={'/assets/images/logo.svg'} width={40} height={40} alt={process.env.NEXT_PUBLIC_COMPANY_NAME?} /> */}
                                            <Typography variant='h5' component={'p'} color={theme.palette.info.main} sx={{ letterSpacing: 2, fontSize: 22, fontWeight: 600 }}>
                                                {process.env.NEXT_PUBLIC_COMPANY_NAME?.toUpperCase()}
                                            </Typography>
                                        </Stack>
                                    </Link>
                                    <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', width: '100%', justifyContent: 'flex-start' }}>
                                        <Link passHref href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`} aria-label="facebook">
                                            <FacebookIcon sx={{ color: theme.palette.info.main, fontSize: 20 }} />
                                        </Link>
                                        <Link passHref href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} aria-label="linkedin">
                                            <LinkedInIcon sx={{ color: theme.palette.info.main, fontSize: 20 }} />
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={2} pt={1} width={'100%'}>
                                <Typography variant='subtitle1' letterSpacing={4} fontWeight={700} component={'p'} color={theme.palette.info.main}>
                                    {'Contact us'.toUpperCase()}
                                </Typography>
                                <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                    <PhoneIcon sx={{ color: theme.palette.info.main, fontSize: 20 }} />
                                    <Link passHref href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}>
                                        <Typography variant='body2' color={theme.palette.info.main}>
                                            {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                                        </Typography>
                                    </Link>
                                </Stack>
                                <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                    <EmailIcon sx={{ color: theme.palette.info.main, fontSize: 20 }} />
                                    <Link passHref href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                                        <Typography variant='body2' color={theme.palette.info.main}>
                                            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                        </Typography>
                                    </Link>
                                </Stack>
                                <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                                    <PinDropIcon sx={{ color: theme.palette.info.main, fontSize: 20 }} />
                                    <Link passHref href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_ADDRESS}`}>
                                        <Typography variant='body2' color={theme.palette.info.main}>
                                            {process.env.NEXT_PUBLIC_CONTACT_ADDRESS}
                                        </Typography>
                                    </Link>
                                </Stack>

                            </Stack>
                        </Stack>

                        <Stack direction={{ sm: 'row', xs: 'column' }} spacing={{ md: 2, xs: 8 }} justifyContent={'space-evenly'} width={'100%'}>
                            <Stack spacing={2} pt={1} width={'100%'}>
                                <Typography variant='subtitle1' letterSpacing={4} fontWeight={700} component={'p'} color={theme.palette.info.main}>
                                    {'Quick links'.toUpperCase()}
                                </Typography>
                                {renderNavLinks}
                            </Stack>
                            <Stack spacing={2} pt={1} width={'100%'}>
                                <Typography variant='subtitle1' letterSpacing={4} fontWeight={700} component={'p'} color={theme.palette.info.main}>
                                    {'Useful links'.toUpperCase()}
                                </Typography>
                                {renderFooterLinks}
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ position: 'relative', zIndex: 11, }}>
                <Stack sx={{
                    backgroundColor: theme.palette.primary.main,
                    minHeight: 28, justifyContent: 'center',
                }}>
                    <Stack direction={{ md: 'row', xs: 'column-reverse' }} spacing={{ md: 0, xs: 2 }}
                        sx={{
                            py: 2,
                            borderTop: '1px solid #fff',
                            px: { xl: 2, md: 4, xs: 2 }, alignItems: { md: 'center', xs: 'center' },
                            justifyContent: 'space-between',
                            width: '100%', maxWidth: 'xl', mx: 'auto',
                        }}>
                        <Typography variant='body2' color={'#fff'} alignSelf={'center'}>
                            {process.env.NEXT_PUBLIC_COMPANY_NAME?.toUpperCase()} © {dateNow.getFullYear()}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Footer
