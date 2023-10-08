import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'
const AlertPopup = ({ isOpen, onOpen, onClose }) => {
    const cancelRef = React.useRef()


  return (
    <div>
       {/* <Button w={"100%"} border={"5px solid red"} onClick={onOpen}></Button> */}
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader></AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody fontSize={20} fontWeight={600} color={"green"}>
          <p>Thank you for shopping with us. Your order has been successfully placed.</p>
        <p>An email confirmation has been sent to your email address.</p>
          </AlertDialogBody>
          <AlertDialogFooter>
            {/* <Button ref={cancelRef} onClick={onClose}>
              No
            </Button> */}
            {/* <Button onClick={onClose} colorScheme='red' ml={3}>
              Yes
            </Button> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default AlertPopup
