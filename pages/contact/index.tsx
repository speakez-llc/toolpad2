import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import ConnectWithoutContact from '@mui/icons-material/ConnectWithoutContact';

export default function ContactPage() {
  const [fadeIn, setFadeIn] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    social: '',
    message: ''
  });

  useEffect(() => {
    setFadeIn(true);
    return () => setFadeIn(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Fade in={fadeIn} timeout={{ enter: 500, exit: 500 }}>
      <div>
        <Typography variant="h4" gutterBottom>
        <ConnectWithoutContact style={{ margin: 8, verticalAlign: 'middle', fontSize: '3rem' }} />
          Let us help you get started!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            fullWidth
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="LinkedIn"
            name="social"
            value={formData.social}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
            Submit
          </Button>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleSnackbarClose}
          message="Your message has been sent!"
        />
      </div>
    </Fade>
  );
}

function AutohideSnackbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="This Snackbar will be dismissed in 5 seconds."
      />
    </div>
  );
}