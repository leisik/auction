import Head from 'next/head'
import { useState, useEffect } from 'react'
import { onSnapshot, collection, updateDoc, doc, addDoc } from "firebase/firestore";
import db from "../src/firebase";
import Link from 'next/link';
import NumberFormat from 'react-number-format';

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

  async function bidPrice() {
    if (bidders.length == 0 && yourBid == initialPrice) {
      let m_bid = parseInt(yourBid);
      await addDoc(collection(db, 'bidders'), {name: name, bid: m_bid, email: email});
      await updateDoc(doc(db, 'currentPrice', '8gh9ThkX56yy8b9uAqAm'), {current: m_bid});
      checkHighestBid();
      setEmail('')
      setName('')
      setYourBid('');
    }
    else {
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
  }

  function isEmpty(value) {
    if(value == null || value == "") {
      return true
    }
    else return false
  }
  const errorInput = isEmpty(name) || isEmpty(yourBid) || isEmpty(email);

  const handleChangeBid = event => {
    const result = event.target.value.replace(/\D/g, '');

    setYourBid(result);
    if(result === null || result == 0) {
      setInformationPageError();
    }
    else if(result <= currentPrice) {
      console.log("currentPrice: ", currentPrice, "yourBid: ", result);
      if(currentPrice == initialPrice && result == initialPrice && bidders.length == 0) {
        setInformationPageError();
      }
      else setInformationPageError('Bid has to be higher than the current price!')
    }
    else {
      setInformationPageError();
    }
  };

  const handleChangeName = event => {
    const result = event.target.value;
    setName(result);
  };

  const handleChangeEmail = event => {
    const result = event.target.value;
    setEmail(result);
  };

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
      <div className="text-3xl font-bold text-white text-center mb-2">
        PIERRE-AUGUSTE RENOIR
      </div>
      <div className="text-xl font-bold text-white text-center">
        Marie Dupuis tenant un miroir avec un portrait de Coco or Gabrielle tenant un miroir avec un portrait de Coco
      </div>

      <div className="flex w-full h-full flex-col items-center mt-6 mb-8 sm:mb-12">
        {/* <video  className="w-11/12 sm:w-640px h-3/6 sm:h-425px bg-cover bg-center rounded-xl mb-4" autoPlay="autoplay" loop={true} muted>
          <source src="/painting.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>  */}
        <img className="w-2/3 lg:w-5/12 2xl:w-1/3 mb-6" src="https://firebasestorage.googleapis.com/v0/b/blockdojo-soundoshi.appspot.com/o/renoir%2Fpobrane.webp?alt=media&token=f2a16c76-ea45-4ef9-9434-b3127bdfcf89" />
        <div className='flex flex-col justify-center items-center text-white text-xl sm:text-2xl mb-2 sm:mb-4'>
          <div className='mr-4 mb-3'>Reserve price: {initialPrice.toLocaleString()} USD</div>
          {/* <div className='mr-4 mb-3'>Current price: {currentPrice.toLocaleString()} USD</div> */}
          {/* <div className='ml-4 mb-3'>{loading ? '0' : bidders.length} bidder(s)</div> */}
        </div>
        {/* <div className='block sm:hidden mb-3'>
            <label htmlFor="bidding_price" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your bid</label>
            <NumberFormat 
              thousandSeparator={true} 
              prefix={'$'} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder={(currentPrice==initialPrice)? currentPrice.toLocaleString() : (currentPrice + 100).toLocaleString()} 
              onChange={handleChangeBid}
              value={yourBid}
              required
            />
          </div> */}
        <div className={informationPageError ? 'mb-1.5 flex' : 'mb-6 flex'}>
          {/* <div className='hidden sm:block' >
              <label htmlFor="bidding_price" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your bid</label>
              <input type="text" 
                id="bid" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder={(currentPrice==initialPrice)? currentPrice.toLocaleString() : (currentPrice + 100).toLocaleString()} 
                min={currentPrice*1.1}
                onChange={handleChangeBid}
                value={yourBid}
                required />
          </div> */}
          {/* <div className='hidden sm:block'>
            <label htmlFor="bidding_price" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your bid</label>
            <NumberFormat 
              thousandSeparator={true} 
              prefix={'$'} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder={(currentPrice==initialPrice)? currentPrice.toLocaleString() : (currentPrice + 100).toLocaleString()} 
              onChange={handleChangeBid}
              value={yourBid}
              required
            />
          </div> */}
          <div className='ml-0 sm:ml-4'>
              <label htmlFor="first_name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="text" 
                id="first_name" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="name" 
                onChange={handleChangeName}
                value={name}
                required />
          </div>
          <div className='ml-4'>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input type="email"
                name="email"
                id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="email" 
                onChange={handleChangeEmail}
                value={email}
                required />
          </div>
        </div>
        {informationPageError && <p className="text-red-500 text-center text-sm mb-6">{informationPageError}</p>}
        <button 
          onClick={()=>{bidPrice()}} 
          disabled={errorInput}
          className='flex justify-center items-center border border-white text-white w-9/12 md:w-56 h-12 text-xl rounded-lg mt-6 sm:mt-0 cursor-pointer hover:border-button-hover hover:text-button-hover disabled:border-[#999] disabled:text-[#999] disabled:cursor-default'>
            Submit interest
        </button>
      </div>
      {/* {loading ? <p>Loading...</p> :
        <>
        <div className='flex flex-col flex text-white text-sm sm:text-base w-full sm:w-9/12 xl:w-[400px] max-w-[550px] mb-6'>
          <p className='w-full text-center text-xl mr-2 mb-2'>Bidders</p>
          {bidders.map((bidder) => {
            return (
            <div key={bidder.id} className='w-auto flex text-white bg-[#4F4E5D] rounded-lg px-4 py-2 mt-1'>
              <p className='mr-8'>{bidder.name} ({bidder.email})</p>
              <div className='mx-auto'></div>
              <p className=''>{bidder.bid.toLocaleString()} USD</p>
            </div>
            )
          })}
        </div>
        </>
      } */}
      <div>
        <Link href='/terms'>
          <button 
            className='flex justify-center items-center border border-white text-white px-4 py-2 text-2xl rounded-lg mt-6 sm:mt-0 cursor-pointer hover:border-button-hover hover:text-button-hover'>
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
