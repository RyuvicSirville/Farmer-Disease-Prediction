  import * as React from 'react';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import IconButton from '@mui/material/IconButton';
  import Typography from '@mui/material/Typography';
  import Menu from '@mui/material/Menu';
  import MenuIcon from '@mui/icons-material/Menu';
  import Container from '@mui/material/Container';
  import Avatar from '@mui/material/Avatar';
  import Button from '@mui/material/Button';
  import Tooltip from '@mui/material/Tooltip';
  import MenuItem from '@mui/material/MenuItem';
  import { useNavigate } from "react-router-dom";
  import logo from '/img/krusakLogo.jpeg';
  import { returnUserlog } from '../pages/Login/Loginsighup';
  const pages = ['Dashboard', 'Generate', 'Tracking'];
  const settings = ['Profile', 'Account', 'Logout'];

  function Header() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      <div className="lg:px-20 md:px-10 bg-[#1e40af]">
        <AppBar 
          className="backdrop-blur-lg" 
          position="fixed" 
          sx={{ backgroundColor: '#1e40af', boxShadow: 'none' }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <img sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                src={logo}
                alt="logo"
                style={{ display: { xs: 'none', md: 'flex' }, marginRight: '1rem', height: '40px' }}
              />
              <button>
              <Typography 
                variant="h5"
                noWrap
                component="a"
                onClick={() => { navigate("/") }}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                AArogyam
              </Typography>
              </button>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem  onClick={() => { navigate("/chat") }}>
                    <Typography textAlign="center">AArogyamAI</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => { navigate("/community") }}>
                    <Typography textAlign="center">Community</Typography>
                  </MenuItem>
                  <MenuItem  onClick={() => { navigate("/complaint") }}>
                    <Typography textAlign="center">Complaint</Typography>
                  </MenuItem>
                  <MenuItem  onClick={() => { navigate("/about") }}>
                    <Typography textAlign="center">AboutUS</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            
              <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => { navigate("/") }}
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                AArogyam
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  onClick={() => { navigate("/chat") }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  AArogyamAI
                </Button>
                <Button
                  onClick={() => { navigate("/community") }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Community
                </Button>
                <Button
                  onClick={() => { navigate("/complaint") }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Complaint
                </Button>
                <Button
                  onClick={() => { navigate("/about") }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  AboutUs
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/498281885/photo/indian-farmer.jpg?s=612x612&w=0&k=20&c=ulJBzW-hy_738vv580iU5DCA-xOa7dh-bWyjERlQJrs=" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {/* Add padding to prevent content from being hidden behind the fixed navbar */}
        <div style={{ paddingTop: '64px' }}></div>
      </div>
    );
  }

  export default Header;
