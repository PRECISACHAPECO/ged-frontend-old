// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext } from 'react'

// ** Components
import Autocomplete from 'src/layouts/components/vertical/Autocomplete'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'

const notifications = [
    {
        meta: 'Today',
        avatarAlt: 'Flora',
        title: 'Congratulation Flora! 🎉',
        avatarImg: '/images/avatars/4.png',
        subtitle: 'Won the monthly best seller badge'
    },
    {
        meta: 'Yesterday',
        avatarColor: 'primary',
        subtitle: '5 hours ago',
        avatarText: 'Robert Austin',
        title: 'New user registered.'
    },
    {
        meta: '11 Aug',
        avatarAlt: 'message',
        title: 'New message received 👋🏻',
        avatarImg: '/images/avatars/5.png',
        subtitle: 'You have 10 unread messages'
    },
    {
        meta: '25 May',
        title: 'Paypal',
        avatarAlt: 'paypal',
        subtitle: 'Received Payment',
        avatarImg: '/images/misc/paypal.png'
    },
    {
        meta: '19 Mar',
        avatarAlt: 'order',
        title: 'Received Order 📦',
        avatarImg: '/images/avatars/3.png',
        subtitle: 'New order received from John'
    },
    {
        meta: '27 Dec',
        avatarAlt: 'chart',
        subtitle: '25 hrs ago',
        avatarImg: '/images/misc/chart.png',
        title: 'Finance report has been generated'
    }
]

const AppBarContent = props => {
    // ** Props
    const { hidden, settings, saveSettings, toggleNavVisibility } = props
    const { title } = useContext(ParametersContext)

    return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                {hidden && !settings.navHidden ? (
                    <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
                        <Icon icon='mdi:menu' />
                    </IconButton>
                ) : null}
                <Autocomplete hidden={hidden} settings={settings} />
            </Box>
            <Box className='app-title' sx={{ display: 'flex', alignItems: 'center' }}>
                <h3>{title}</h3>
            </Box>
            <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
                <ModeToggler settings={settings} saveSettings={saveSettings} />
                <NotificationDropdown settings={settings} notifications={notifications} />
                <UserDropdown settings={settings} />
            </Box>
        </Box>
    )
}

export default AppBarContent
