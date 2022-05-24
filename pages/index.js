import Head from 'next/head'
import { useState, useEffect } from 'react'
import { onSnapshot, collection, updateDoc, doc, addDoc } from "firebase/firestore";
import db from "../src/firebase";
import Link from 'next/link';

export default function Home() {
  const [currentPrice, setCurrentPrice] = useState(3000000);
  const [yourBid, setYourBid] = useState();
  const [informationPageError, setInformationPageError] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(true);
  const [bidders, setBidders] = useState();
  const initialPrice = 3000000;
  
  useEffect(() => {
    onSnapshot(collection(db, "bidders"), (snapshot) => {
        setBidders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        checkHighestBid();
    });
    onSnapshot(doc(db, 'currentPrice', '8gh9ThkX56yy8b9uAqAm'), (doc) => {
      setCurrentPrice(doc.data().current);
      setLoading(false);
    })  
  },[]);

  function checkHighestBid() {
    if(!loading) {
      bidders.map(bidder => {
        if(bidder.bid > currentPrice) {
          setCurrentPrice(bidder.bid);
        }
      })
    }
  }

  function checkBid(value) {
    setYourBid(value)
    if(value === null || value == 0) {
      setInformationPageError();
    }
    else if(value <= currentPrice) {
      setInformationPageError('Bid has to be higher than the current price!')
    }
    else {
      setInformationPageError();
    }
  }

  async function bidPrice() {
    if(yourBid <= currentPrice) {
      setInformationPageError("Your bid is too low.");
    }
    else if(name != null && yourBid != null && email != null) {
      let m_bid = parseInt(yourBid);
      await addDoc(collection(db, 'bidders'), {name: name, bid: m_bid, email: email});
      await updateDoc(doc(db, 'currentPrice', '8gh9ThkX56yy8b9uAqAm'), {current: m_bid});
      checkHighestBid();
      setEmail('')
      setName('')
      setYourBid('');
    }
    else setInformationPageError("Fill all the inputs.");
  }

  function isEmpty(value) {
    if(value == null || value == "") {
      return true
    }
    else return false
  }
  const errorInput = isEmpty(name) || isEmpty(yourBid);

  return (
    <div className="min-h-screen w-full py-0 px-2 flex flex-col justify-center items-center bg-main-right font-mono">
    <Head>
      <title>Art1Bid auction</title>
      <meta name="Non-profit project to help out our easter friends as much as we can " content="Art1Bid auction" />
      <link rel="icon" href="/auction.png" />
    </Head>

    <header className='w-full'>
      <div className="hidden w-60 h-60 sm:block absolute top-4 left-4 cursor-pointer">
        <img src="/art1bid.png" alt="Art1Bid Logo" />
      </div>
      <div className="block sm:hidden w-full flex justify-center items-center cursor-pointer">
        <img src="/art1bid.png" alt="Art1Bid Logo" className='w-96 my-6'/>
      </div>
    </header>

    <main className="flex-1 flex flex-col justify-center items-center py-4 pb-10 px-0 mt-0 sm:mt-20">
      <div className="text-3xl font-bold text-white text-center">
        PIERRE-AUGUSTE RENOIR
      </div>
      <div className="text-xl font-bold text-white text-center">
        Marie Dupuis tenant un miroir avec un portrait de Coco or Gabrielle tenant un miroir avec un portrait de Coco
      </div>

      <div className="flex w-full h-full flex-col items-center mt-4 mb-8 sm:mb-12">
        <video  className="w-11/12 sm:w-640px h-3/6 sm:h-425px bg-cover bg-center rounded-xl mb-4" autoPlay="autoplay" loop={true} muted>
          <source src="/painting.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video> 
        <div className='flex flex-col justify-center items-center text-white text-xl sm:text-2xl mb-2 sm:mb-4'>
          <div className='mr-4 mb-3'>Initial price: {initialPrice.toLocaleString()} USD</div>
          {/* <div className='text-sm'>●</div>
          <div className='ml-4'>{Object.keys(bidders).length} bidders</div> */}
          <div className='mr-4 mb-3'>Current price: {currentPrice.toLocaleString()} USD</div>
          <div className='ml-4 mb-3'>{loading ? '0' : bidders.length} bidder(s)</div>
        </div>
        <div className={informationPageError ? 'mb-1.5 flex' : 'mb-6 flex'}>
          <div >
              <label htmlFor="bidding_price" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your bid</label>
              <input type="text" 
                id="bid" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder={(currentPrice==initialPrice)? currentPrice.toLocaleString() : (currentPrice + 100).toLocaleString()} 
                min={currentPrice*1.1}
                onChange={(e)=> {checkBid(e.target.value)}}
                required />
          </div>
          <div className='ml-4'>
              <label htmlFor="first_name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="text" 
                id="first_name" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="name" 
                onChange={(e)=>{setName(e.target.value)}}
                required />
          </div>
          <div className='ml-4'>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input type="email"
                name="email"
                id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="email" 
                onChange={(e)=>{setEmail(e.target.value)}}
                required />
          </div>
        </div>
        {informationPageError && <p className="text-red-500 text-center text-sm mb-6">{informationPageError}</p>}
        <button 
          onClick={()=>{bidPrice()}} 
          disabled={errorInput}
          className='flex justify-center items-center border border-white text-white w-40 h-12 text-2xl rounded-lg mt-6 sm:mt-0 mt-6 cursor-pointer hover:border-button-hover hover:text-button-hover disabled:border-[#999] disabled:text-[#999] disabled:cursor-default'>
            Place bid
        </button>
      </div>
      {loading ? <p>Loading...</p> :
        <>
        <div className='flex flex-col absolute right-10 top-52 flex text-white min-w-[350px] max-w-[450px]'>
          <p className='w-full text-center text-xl mr-2 mb-2'>Bidders</p>
          {bidders.map((bidder) => {
            return (
            <div key={bidder.id} className='w-auto flex text-white bg-[#4F4E5D] rounded-lg px-4 py-2 mt-1'>
              <p className='mr-2'>{bidder.name}({bidder.email})</p>
              <p className='mr-2'>{bidder.bid.toLocaleString()} USD</p>
            </div>
            )
          })}
        </div>
        </>
      }
      <div>
        <Link href='/terms'>
          <button 
            className='flex justify-center items-center border border-white text-white px-4 py-2 text-2xl rounded-lg mt-6 sm:mt-0 mt-6 cursor-pointer hover:border-button-hover hover:text-button-hover'>
              Terms and Conditions
          </button>
        </Link>
      </div>
    </main>

    <footer className='text-center flex justify-center items-center text-white mb-4'>
      <div className=''>All right reserved. Designed & developed by Art1Bid 2022</div>
    </footer>

  </div>
  )
}
