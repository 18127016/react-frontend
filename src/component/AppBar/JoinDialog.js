import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem } from '@mui/material';

export default function JoinDialog({onClick}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    onClick();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <MenuItem onClick={handleClickOpen}>Join Class</MenuItem>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md'>
            <DialogTitle>Join Class</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Text
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}
