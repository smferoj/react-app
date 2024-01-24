import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CategoryPhotoModal = (props) => {
  return (
    <>
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         
       <img src={props.photo} alt="photo" className='cursor-pointer' style={{width:'450px'}}/>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>    
    </>
  )
}

export default CategoryPhotoModal