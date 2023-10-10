import React from 'react'
import Style from './Checkout.module.css'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react'


import { useDispatch, useSelector } from 'react-redux';

import AlertPopup from './AlertPopup';
import { useNavigate } from 'react-router-dom';

const initialcreaditData = {
  name: "",
  card_Number: "",
  card_Cvv: "",
  card_Expiry: "",

}
const CreditCard = ({ amount }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cardData, setCardData] = React.useState(initialcreaditData)

  const { name, card_Number, card_Cvv, card_Expiry } = cardData
  console.log({ cardData })


  const handlepayment = () => {

    if (name && card_Number && card_Cvv && card_Expiry) {
      onOpen()

      setTimeout(() => {
        navigate("/")
      }, 5000)
    } else {
      alert("please fill all the required feiled")
    }
  }
  return (
    <div>
      <div className={Style.Upi_id_card}>
        <FormControl isRequired>
          <FormLabel>Enter card number</FormLabel>
          <Input value={card_Number} onChange={e => setCardData(prev => ({ ...prev, card_Number: e.target.value }))} placeholder='Enter card number' type='Number' isRequired />
        </FormControl>
      </div>
      <div className={Style.Upi_id_cvc}>
        <div className={Style.account_number} style={{ width: "60%" }}>
          <FormControl isRequired>
            <FormLabel>Card expiry date</FormLabel>
            <Input value={card_Expiry} onChange={e => setCardData(prev => ({ ...prev, card_Expiry: e.target.value }))} placeholder="MM/YYYY" />
          </FormControl>

        </div>


        <div className={Style.account_number} style={{ width: "30%" }}>
          <FormControl isRequired>
            <FormLabel>CVC</FormLabel>
            <Input value={card_Cvv} onChange={e => setCardData(prev => ({ ...prev, card_Cvv: e.target.value }))} type="Number" placeholder='CVC' />
          </FormControl>
        </div>
      </div>
      <div className={Style.Upi_id_card}>
        <FormControl isRequired>
          <FormLabel>Card holder name</FormLabel>
          <Input value={name} onChange={e => setCardData(prev => ({ ...prev, name: e.target.value }))} placeholder="Card holder name" />
        </FormControl>
      </div>
      <Button onClick={handlepayment} m={"1rem"} w={"90%"} colorScheme='teal' variant='solid'>
        {`PAY ${amount}`}
        <AlertPopup onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
      </Button>
    </div>
  )
}

export default CreditCard
