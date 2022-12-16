import React from 'react'
import classes from './ModalWindow.module.css'
import Card from './UI/Card'

function ModalWindow({onRemove, onClose}) {
  return (
    <Card className={classes.portal}>
    <p>Are you sure ?</p>
        <button onClick={onClose}>No</button>
        <button onClick={onRemove}>Yes</button>
    </Card>
  )
}

export default ModalWindow