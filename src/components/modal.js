import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({setOpen, patient,open,deleteRecord}) {
    const handleYesClick = () => {
        console.log('Yes button clicked');
        deleteRecord(patient._id);
      };
  return (
    <div>
      <Modal
        open={open}
        deleteRecord={deleteRecord}
        setOpen={setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='mx-auto' variant="h6" component="h2">
            are you sure you want to delete the record?
          </Typography>
            <div className='flex justify-between'>
                <div onClick={()=>handleYesClick()} className='border bg-red-400 text-white w-[100px] text-center py-2 rounded'>yes</div>
                <div onClick={()=>setOpen(false)} className='border  w-[100px] text-center py-2 rounded'>No</div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}