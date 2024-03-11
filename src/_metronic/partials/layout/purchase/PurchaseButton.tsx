import {FC} from 'react'

const PurchaseButton: FC = () => (
  <a
    href={import.meta.env.VITE_APP_PURCHASE_URL}
    className='engage-purchase-link  shadow-sm rounded-top-0'
  >
    
  </a>
)

export {PurchaseButton}
