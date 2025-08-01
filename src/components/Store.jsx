import { useParams } from 'react-router-dom';
import productData from '../data/products.json';
import rupeeIcon from '../assets/rupee.png';
import onlineTransactionIcon from '../assets/onlinepayment.png';
import fastdeliveryIcon from '../assets/fastdelivery.png';
const Store = () => {
const { id } = useParams(); 
const storeData = productData.products.find((p) => p.id === (id));
  return (
    <>
<div className="w-full max-w-sms bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

    <div className="flex flex-row pt-10 pb-10 p-5 justify-between items-center">
       
        {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-left"> {storeData.sold_by.shop_name} </h5>
        {/* <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
        <a target='_blank' href="https://www.meesho.com/VastrabyRashi?ms=2" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Shop</a>
        
    </div>
</div>

<div className='w-full bg-amber-50  p-5 mt-5 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"'>
    <div className='flex flex-row wd-full gap-2.5 justify-around'>
    <div className='flex flex-col lg:w-20 items-center'>
    <img src={rupeeIcon} className='w-10' />
    <h5>Best Price Always</h5>
    </div>
    <div className='flex flex-col lg:w-20 align items-center'>
    <img src={onlineTransactionIcon} className='w-10' />
    <h5>Online Payment</h5>
    </div>
    <div className='flex flex-col lg:w-20 items-center'>
    <img src={fastdeliveryIcon} className='w-10' />
    <h5>In Time Delivery</h5>
    </div>
    </div>
</div>
</>

  )
}

export default Store