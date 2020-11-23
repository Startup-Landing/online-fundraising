/** @jsx jsx */
import { jsx, Box, Flex, Container, Button } from 'theme-ui';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import Image from 'components/image';
import { NavLink } from 'components/link';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import menuItems from './header.data';
import lock from 'assets/images/icons/lock.png';

export default function Header() {
  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box as="header" sx={styles.header}>
            <Container>
              <Box sx={styles.headerInner}>
                <Logo sx={styles.logo} />
                <Flex as="nav" sx={styles.navbar} className="navbar">
                  <Box as="ul" sx={styles.navList}>
                    {menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        <NavLink path={path} label={label} />
                      </li>
                    ))}
                  </Box>
                </Flex>
                <Flex sx={styles.buttonGroup}>
                  <Button variant="text" sx={styles.login}>
                    <Image src={lock} width="19" height="23" alt="lock icon" />
                    Login
                  </Button>
                  <Button variant="primary" sx={styles.donateNow}>
                    Donate Now
                  </Button>
                </Flex>
                <NavbarDrawer />
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        paddingTop: '15px',
        paddingBottom: '15px',
      },
    },
  },
  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 4,
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-mobile-menu': {
      backgroundColor: 'white',
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 6, 12],
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
    // justifyContent: 'center',
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    flexGrow: 1,
    p: 0,
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: [null, null, null, null, '0 20px'],
    },
    '.active': {
      color: 'primary',
    },
  },
  buttonGroup: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: [4, 6],
    button: {
      fontWeight: 500,
    },
  },
  login: {
    p: 0,
    mr: [null, null, null, null, 6],
    img: {
      mr: 2,
      maxWidth: [12, 15, '100%'],
    },
  },
  donateNow: {
    display: ['none', null, null, null, 'flex'],
    minHeight: [30, null, null, 45],
    px: ['12px', null, null, 4],
    fontSize: [0, null, null, '15px'],
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: 'text',
    },
  },
};
