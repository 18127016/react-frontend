import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem, Box } from '@mui/material';
import { createClasses } from '../../service/Service';

export default function CreateDialog({onClick, onCreate}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    onClick();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const classroom = {
      name: event.target["name"].value,
      topic: event.target["topic"].value,
      part: event.target["part"].value,
      room: event.target["room"].value,
    }
    const createdClass = (await createClasses(classroom)).data
    handleClose();
    onCreate(createdClass);
  }

  return (
    <div>
        <MenuItem onClick={handleClickOpen}>Create Class</MenuItem>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md'>
            <DialogTitle>Create class</DialogTitle>
            <Box component="form" onSubmit={handleSubmit}>
              <DialogContent>
              <TextField
                  autoFocus
                  required
                  margin="dense"
                  name="name"
                  label="Class name"
                  type="text"
                  fullWidth
                  variant="standard"
              />
              <TextField
                  margin="dense"
                  name="part"
                  label="Part"
                  type="text"
                  fullWidth
                  variant="standard"
              />
              <TextField
                  margin="dense"
                  name="topic"
                  label="Topic"
                  type="text"
                  fullWidth
                  variant="standard"
              />
              <TextField
                  margin="dense"
                  name="room"
                  label="Room"
                  type="text"
                  fullWidth
                  variant="standard"
              />
              </DialogContent>
              <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Create</Button>
              </DialogActions>
            </Box>

            
        </Dialog>
    </div>
  );
}
