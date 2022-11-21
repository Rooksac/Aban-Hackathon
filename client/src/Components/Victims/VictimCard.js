import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { textAlign } from '@mui/system';

export default function VictimCard({victim}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'black',
    opacity: '.9',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };
  const [open, setOpen] = useState(false);
  function handleOpen(){
    setOpen(true);
  }
  function handleClose(){
    setOpen(false);
  }
  return (
    <div>
            <div className='each-victim-card'>
            <div className='each-victim-preview-image'>
            <img src={victim.image_large} />
            </div>
            <h4 className='all-names' onClick={handleOpen}>{victim.name}</h4>
            </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className = 'modal-box' sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {victim.name}
          </Typography>
          <img src={victim.image_large}/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Age: {victim.age} <br/>
            Date of death: {victim.date} <br/>
            Location of death: {victim.location} <br/>
            Cause of death: {victim.cause} <br/>
          </Typography>
        </Box>
      </Modal>
           
    </div>
  )
}
