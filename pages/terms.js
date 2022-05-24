import Head from 'next/head'
import Link from 'next/link'

export default function Terms() {
  
  return (
    <div className="min-h-screen w-full py-0 px-2 flex flex-col justify-center items-center bg-main-right font-mono">
    <Head>
      <title>Terms & Conditions</title>
      <meta name="Non-profit project to help out our easter friends as much as we can " content="Art1Bid auction" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header id='top' className='w-full'>
        <Link href="/">
            <div className="hidden w-60 h-60 sm:block absolute top-4 left-4 cursor-pointer hover:opacity-80">
                <img src="/art1bid.png" alt="Art1Bid Logo" />
            </div>
        </Link>
        <Link href="/">
            <div className="block sm:hidden w-full flex justify-center items-center cursor-pointer hover:opacity-80">
                <img src="/art1bid.png" alt="Art1Bid Logo" className='w-96 my-6'/>
            </div>
        </Link>
    </header>

    <main className="flex-1 flex flex-col justify-center items-center py-4 pb-10 px-0 mt-0 sm:mt-20 scroll-smooth">

      <div className="fixed bottom-5 right-5 z-50">
        <a href='#top'>
            <div className='bg-white cursor-pointer hover:opacity-80'>
                <p className='p-2'>TOP</p>
            </div>
        </a>
      </div>
      <div className="text-3xl font-bold text-white text-center">
        TERMS AND CONDITIONS OF ART ONE BID LTD AUCTIONS 
      </div>
      <div className="text-xl font-bold text-white text-center">
        (<q>Terms and Conditions</q>)
      </div>
      <div className='w-8/12 text-white'>
        <h1 className='text-2xl'>Table of contents:</h1>
        <div>
            <div className='flex space-x-8 w-full cursor-pointer hover:opacity-80'>
                <a href="#section1">1.</a>
                <a href="#section1">ART ONE BID LTD AS COMMISSIONAIRE</a>
            </div>
            <div className='flex space-x-8 w-full cursor-pointer hover:opacity-80'>
                <a href="#section2">2.</a>
                <a href="#section2">TERMS</a>
            </div>
            <div className='flex space-x-8 w-full cursor-pointer hover:opacity-80'>
                <a href="#section3">3.</a>
                <a href="#section3">GENERAL CONDITIONS OF BIDDING</a>
            </div>
            <div className='flex space-x-8 w-full cursor-pointer hover:opacity-80'>
                <a href="#section4">4.</a>
                <a href="#section4">COURSE OF THE AUCTION</a>
            </div>
            <div className='flex space-x-8 w-full cursor-pointer hover:opacity-80'>
                <a href="#section5">5.</a>
                <a href="#section5">PAYMENT</a>
            </div>
            <div className='flex space-x-8 w-full cursor-pointer hover:opacity-80'>
                <a href="#section6">6.</a>
                <a href="#section6">THE TRANSFER AND RECEIPT OF AN OBJECT OTHER THAN A TOKEN</a>
            </div>
            <div className='flex space-x-8 w-full cursor-pointer hover:opacity-80'>
                <a href="#section7">7.</a>
                <a href="#section7">TRANSFER OF A TOKEN</a>
            </div>
            <div className='flex space-x-8 w-full cursor-pointer hover:opacity-80'>
                <a href="#section8">8.</a>
                <a href="#section8">DECLARATIONS BY THE PURCHASER CONCERNING THE AUCTION OF TOKENS</a>
            </div>
            <div className='flex space-x-8 w-full cursor-pointer hover:opacity-80'>
                <a href="#section9">9.</a>
                <a href="#section9">RESPONSIBILITY</a>
            </div>
            <div className='flex space-x-6 w-full cursor-pointer hover:opacity-80'>
                <a href="#section10">10.</a>
                <a href="#section10">WITHDRAWAL FROM THE CONTRACT </a>
            </div>
            <div className='flex space-x-6 w-full cursor-pointer hover:opacity-80'>
                <a href="#section11">11.</a>
                <a href="#section11">COPYRIGHTS</a>
            </div>
            <div className='flex space-x-6 w-full cursor-pointer hover:opacity-80'>
                <a href="#section12">12.</a>
                <a href="#section12">PERSONAL DATA</a>
            </div>
            <div className='flex space-x-6 w-full cursor-pointer hover:opacity-80'>
                <a href="#section13">13.</a>
                <a href="#section13">FINAL PROVISIONS</a>
            </div>
            <div className='flex w-full cursor-pointer hover:opacity-80'>
                <p></p>
                <a href="#sectionAnnex">Annexes</a>
            </div>
        </div>
      </div>

      <div className="flex w-full h-full flex-col items-center mt-4 mb-8 sm:mb-12">
        <p className='text-white w-8/12 text-justify mb-6'>These Terms and Conditions determine the rules and conditions of participation in the auction and sale of works of art and other collectibles by ART ONE BID LTD with its registered office in London (United Kingdom), a company incorporated under the laws of the United Kingdom, registered at Companies House under number 13490385, Craven House, Ground Floor 40-44 Uxbridge Road, postcode W5 2BS, organised simultaneously in the form of fixed auction organised during the Global Blockchain Convention in Dubai on 24 - 26 May 2022 and by means of the Internet service, in the online formula, i.e. on a specified date with the use of technology enabling mutual communication between ART ONE BID and the Bidder in real time, available at the following website: <a href='https://art1bid.com'>www.art1bid.com</a></p>
        <div className='space-y-6 w-8/12 text-white text-justify'>
            <div className='space-y-4'>
                <div id='section1' className='flex space-x-10'>
                    <h2 className='font-extrabold'>1.</h2>
                    <h2 className='font-extrabold'>ART ONE BID LTD AS COMMISSIONAIRE</h2>
                </div>
                <div className='flex space-x-14'>
                    <p></p>
                    <p>ART ONE BID LTD acts as a consignee - an intermediate substitute acting in its own name but on behalf of the consignor entitled to dispose of the object, unless otherwise stated in the catalogue, its amendments or in the announcements made known prior to the auction.</p>
                </div>
                <div className='flex space-x-14'>
                    <p></p>
                    <p>The organiser informs that auctions organised by ART ONE BID LTD are public auctions.</p>
                </div>
            </div>
            <div className='space-y-4'>
                <div id='section2' className='flex space-x-10'>
                    <h2 className='font-extrabold'>2.</h2>
                    <h2 className='font-extrabold'>TERMS</h2>
                </div>
                <div className='flex space-x-6'>
                    <p>2.1.</p>
                    <p><span className='font-extrabold'><q>ART ONE BID</q> or <q>Consignee</q></span> - with its registered office in London, United Kingdom, a company incorporated under the laws of the United Kingdom and registered at Companies House under registration number 13490385, Craven House, Ground Floor 40-44 Uxbridge Road, postcode W5 2BS.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>2.2.</p>
                    <p><span className='font-extrabold'><q>Auction</q></span> or <span className='font-extrabold'><q>Bidding</q></span> - an organised form of sale or purchase of objects, consisting of the submission to ART ONE BID, under the terms and conditions set out in the Regulations, of competing bids for the purchase of individual objects by the bidders, in which the highest bidder becomes the purchaser.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>2.3.</p>
                    <p><span className='font-extrabold'><q>Online auction</q></span> or <span className='font-extrabold'><q>Online bidding</q></span> - an auction held via the Internet service in the form of online transmission during which bidders have the opportunity to place bids in parallel with bidders participating in the fixed auction, i.e. within a specified period with the use of technology enabling mutual communication between ART ONE BID and the bidder in real time, available at: www. art1bid.com; the online auction takes place simultaneously with the stationary auction and constitutes an alternative form of participation in the stationary auction.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>2.4.</p>
                    <p><span className='font-extrabold'><q>Stationary auction</q></span> or <span className='font-extrabold'><q>Stationary bidding</q></span> - an auction held in a stationary format in Dubai during the Global Blockchain Convention.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>2.5.</p>
                    <p><span className='font-extrabold'><q>Auctioneer</q></span> - the person appointed by ART ONE BID to conduct the auction.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>2.6.</p>
                    <p><span className='font-extrabold'><q>Reserve price</q></span> - the lowest amount for which an object can be sold without the additional consent of the consigner. The minimum price may not exceed the lower estimation limit. Unless otherwise stated, each object is offered subject to a minimum price.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>2.7.</p>
                    <p><span className='font-extrabold'><q>Purchase price</q></span> - the final price the buyer is obliged to pay for the object. It consists of the hammer price, the Commission, taxes and additional charges. </p>
                </div>
                <div className='flex space-x-6'>
                    <p>2.8.</p>
                    <p><span className='font-extrabold'><q>Hammer price</q></span> - the final amount bid for an object during an auction. It is confirmed by the auctioneer striking the gavel, which is tantamount to concluding a sales contract. The auction fee, taxes and additional charges will be added to the auction price.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>2.9.</p>
                    <p><span className='font-extrabold'><q>Starting price</q></span> - the price set by the auctioneer at which bidding begins. It is customary for the starting price to be between 1/2 and 3/4 of the lower estimation limit. The starting price may be specified in the catalogue.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.10.</p>
                    <p><span className='font-extrabold'><q>Digital work</q></span> - a digital reproduction of an artist`s work, associated with an individually designated Token and identified by that Token; </p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.11.</p>
                    <p><span className='font-extrabold'><q>Estimate</q></span> - An estimate of the value an object may achieve at auction. It does not take into account auction fees and incidental charges or taxes. Estimate prices are available in the PDF version of the auction catalogue and in the printed catalogue. Estimates in the auction catalogue may be quoted in euros or US dollars. The exchange rate on the day of the auction may differ from that on the day the catalogue is printed.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.12.</p>
                    <p><span className='font-extrabold'><q>Consignor</q></span> -  the person who presents an object for sale and who is entitled to dispose of the object.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.13.</p>
                    <p><span className='font-extrabold'><q>Licence</q></span> - the right granted to the purchaser to use the digital work associated with a token.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.14.</p>
                    <p><span className='font-extrabold'><q>Bidder</q></span> - a person who has successfully passed the registration and verification process carried out by ART ONE BID and as a result has been given the opportunity to actively participate in the auction.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.15.</p>
                    <p><span className='font-extrabold'><q>Purchaser</q></span> - a person (auctioneer) who, as a result of an auction, conditional sale or non-auction sale conducted by ART ONE BID, has concluded a sales contract.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.16.</p>
                    <p><span className='font-extrabold'><q>Lot</q></span> - a work of art or other collectible object, including a Token, which may be sold by auction or non-auction sale.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.17.</p>
                    <p><span className='font-extrabold'><q>Commission</q></span> - ART ONE BID`s additional remuneration for handling the sale transaction, amounting to 3% of the final hammer price.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.18.</p>
                    <p><span className='font-extrabold'><q>Wallet</q></span> - a browser wallet specifically designed to handle Tokens, allowing them to be sent and received.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.19.</p>
                    <p><span className='font-extrabold'><q>Raise</q></span> - an offer made by an auctioneer to purchase an object which is higher than the highest bid at a given moment by a bid increment. </p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.20.</p>
                    <p><span className='font-extrabold'><q>Art1Bid regulations</q></span> - regulations specifying the rules and technical requirements for the use of the website, the rules for the conclusion and termination of the agreement, intellectual property rights and the complaint procedure; the regulations are available at the following web address: <a href='https://art1bid.com'>https://art1bid.com</a></p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.21.</p>
                    <p><span className='font-extrabold'><q>Internet service</q></span> - the internet service enabling the bidders to participate online in the auction, available at the following website address: <a href='https://art1bid.com'>www.art1bid.com;</a> where these Rules refers to an Internet service, it shall also mean a mobile application installed on the Bidder`s mobile device, offered by the service provider <a href='https://art1bid.com'>www.art1bid.com</a> for mobile operating systems, which is part of the Internet service; </p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.22.</p>
                    <p><span className='font-extrabold'><q>Conditional sale</q></span> - a conditional sale contract is concluded when the bid price has not reached the reserve price. The transaction comes into effect if the consignor agrees to sell the object at a price lower than the minimum price or the auctioneer increases his bid to the minimum price. Otherwise the conditional sale does not take place and the object may be put up for a post auction sale.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.23.</p>
                    <p><span className='font-extrabold'><q>Token</q></span> or <span className='font-extrabold'><q>NFT Token</q></span> - a data unit stored in a blockchain registry, in accordance with the Elas Digital standard (or equivalent standard), which contains information about the name of the digital work, a description of the digital work, the location where it is stored, as well as other data, if required by contracts or law, which determines the extent of the Token owner`s right to use the digital work associated with the Token.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.24.</p>
                    <p><span className='font-extrabold'><q>Sales contract</q></span> - a contract concluded in the course of an auction between a seller, in which ART ONE BID acts as consignee, and a purchaser (bidder), the object of which is the sale of an object against payment of the purchase price for that object.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>2.25.</p>
                    <p><span className='font-extrabold'><q>Work</q></span> - an original work within the meaning of the Copyright and Related Rights Act by an artist which forms the basis for a digital work.</p>
                </div>
            </div>
            <div className='space-y-4'>
                <div id='section3' className='flex space-x-10'>
                    <h2 className='font-extrabold'>3.</h2>
                    <h2 className='font-extrabold'>GENERAL CONDITIONS OF BIDDING</h2>
                </div>
                <div className='flex space-x-6'>
                    <p>3.1.</p>
                    <p>Bidders may, at their choice, take part in the auction either in the form of a fixed auction or an online auction.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>3.2.</p>
                    <p>In order to be admitted to the auction, all bidders must register prior to the auction, provided that, in the case of online bidding, registration shall be effected via the website. In addition, the bidders are required to provide the information requested in the registration form, to read and accept the terms and conditions, and in the case of online auctions to read and accept the ArtOneBid auction rules, available at the following web address: <a href='https://art1bid.com'>www.art1bid.com</a></p>
                </div>
                <div className='flex space-x-6'>
                    <p>3.3.</p>
                    <p>In the case of stationary bidding the bidder is additionally obliged to present a document confirming his identity and to collect the bid number paddle.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>3.4.</p>
                    <p>The personal data of the bidders is confidential information and remains for the exclusive information of ART ONE BID, which may process the personal data of the auction participants to the extent necessary for the execution of the bidding orders.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>3.5.</p>
                    <p>Due to the verification and admission process, it is <span className='font-extrabold'>recommended</span> that you register for the online auction no later than 12 hours before the start of bidding. Late registration may result in the bidder not being admitted to the auction.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>3.6.</p>
                    <p>In the case of online bidding, after registration the bidder will be informed by e-mail that he has been admitted to the auction, which is equivalent to successful verification.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>3.7.</p>
                    <p>ART ONE BID may, at its discretion, refuse to register or admit certain persons to participate in the auction, as well as make registration subject to the provision of other documents that may certify the identity or solvency of the person applying for registration or admission to the auction.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>3.8.</p>
                    <p>ART ONE BID has the right to refuse registration or to allow certain persons to participate in the auction, in any case of suspected money laundering or terrorist financing.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>3.9.</p>
                    <p>In the case of a physical auction, the auctioneer conducts the auction, and reads out the lot and subsequent bids, indicates the bidders, announces the end of the bidding by knocking down the gavel and indicates the winner.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>3.10.</p>
                    <p>In the case of a physical auction the auctioneer has the right to withdraw the lot from the auction at will without giving reasons. The descriptions contained in the auction catalogue may be supplemented or changed by the auctioneer or a person designated by him before the bidding begins.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>3.11.</p>
                    <p>In the case of a physical auction, should a dispute arise during the auction, the auctioneer shall either settle the dispute or re-auction the object in question.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>3.12.</p>
                    <p>ART ONE BID reserves the right to record the course of the auction using audio and video recording equipment.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>3.13.</p>
                    <p>You can take part in the auction both by placing bids before the bidding starts and by placing bids in subsequent bids during the on-site and online auctions.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>3.14.</p>
                    <p>ART ONE BID informs that catalogue descriptions do not present the full condition of the lot. The lack of such information does not mean that the given object is free from defects and damage.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>3.15.</p>
                    <p>With regard to the remaining regulations on online bidding in terms of:</p>
                </div>
                <div className='flex space-x-3'>
                        <p className='ml-16'></p>
                        <p>a</p>
                        <p>the minimum technical requirements necessary for the correct use of the website;</p>
                    </div>
                    <div className='flex space-x-3'>
                        <p className='ml-16'></p>
                        <p>b</p>
                        <p>general terms and conditions of use;</p>
                    </div>
                    <div className='flex space-x-3'>
                        <p className='ml-16'></p>
                        <p>c</p>
                        <p>the terms and conditions of participation in the auction by means of an online service;</p>
                    </div>
                    <div className='flex space-x-3'>
                        <p className='ml-16'></p>
                        <p>d</p>
                        <p>the general rules on the conduct of auctions;</p>
                    </div>
                    <div className='flex space-x-3'>
                        <p className='ml-16'></p>
                        <p>e</p>
                        <p>the terms and conditions for acquiring Tokens via the Website;</p>
                    </div>
                    <div className='flex space-x-3'>
                        <p className='ml-16'></p>
                        <p>f</p>
                        <p>payments for transactions;</p>
                    </div>
                    <div className='flex space-x-3'>
                        <p className='ml-16'></p>
                        <p>g</p>
                        <p>order processing;</p>
                    </div>
                    <div className='flex space-x-3'>
                        <p className='ml-16'></p>
                        <p>g</p>
                        <p>order processing;</p>
                    </div>
                    <div className='flex space-x-14'>
                        <p></p>
                        <p>ART ONE BID refers to the Art1Bid regulations, available at: <a href='https://art1bid.com'>www.art1bid.com</a></p>
                    </div>
                </div>
            <div id='section4' className='space-y-4'>
                <div className='flex space-x-10'>
                    <h2 className='font-extrabold'>4.</h2>
                    <h2 className='font-extrabold'>COURSE OF THE AUCTION</h2>
                </div>
                <div className='flex space-x-6'>
                    <p>4.1.</p>
                    <p>Bidding starts with the starting price of the object. The starting price is displayed on <a href='https://art1bid.com'>www.art1bid.com</a> when bidding begins. If bids have been placed for an object before the auction starts, the bidding starts with the amount of the highest bid placed.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>4.2.</p>
                    <p>If the minimum price is not reached through bidding, the bidding process is terminated by indicating the word pass at www.ar1bid.com. This means that the transaction has not been concluded. This fact will be announced without the gavel being knocked down (in the case of physical bidding).</p>
                </div>
                <div className='flex space-x-6'>
                    <p>4.3.</p>
                    <p>In order to reach the reserve price, the auctioneer and ART ONE BID staff may make bids during the auction without indicating that they are doing so on behalf of the bidder, either by making consecutive bids or by making bids in response to the bids of other bidders. If there are no bids on an object or if the bids have not reached the reserve price, the auctioneer may declare the object unsold, signalling this with the term pass.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>4.4.</p>
                    <p>In a physical auction, the auctioneer shall decide on the amount of further bids, which he shall quote in accordance with the bidding table, provided that he may at his own discretion decide on a different amount of bid depending on the course of the auction.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>4.5.</p>
                    <p>The auction is timed. The auction starts on 24 May 2022 at 12.00 p.m. and ends on 26 May 2022 at 6.00 p.m. The highest bidder, accepted by the auctioneer or the system, is the winner of the auction, which means acceptance of the highest bid, which is the bid, and consequently conclusion of the sales contract between ART ONE BID and the auctioneer, provided, however, that the auctioneer does not withdraw the lot from the auction or offer it for sale again in accordance with 4.6. The successful bidder is obliged to pay the full purchase price.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>4.6.</p>
                    <p>An auctioneer may withdraw lot from an auction at any time, re-offer lot for sale in the event of an error or a dispute over the outcome of a bidding process. In this case the auctioneer may take any action he/she deems appropriate and reasonable. Should any dispute about the outcome of the auction arise after the auction, the result of the auction sale shall be deemed final.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>4.7.</p>
                    <p>Auction prices are quoted in US dollars and payment should be made in that currency.</p>
                </div>
            </div>
            <div id='section5' className='space-y-4'>
                <div className='flex space-x-10'>
                    <h2 className='font-extrabold'>5.</h2>
                    <h2 className='font-extrabold'>PAYMENT</h2>
                </div>
                <div className='flex space-x-6'>
                    <p>5.1.</p>
                    <p>ART ONE BID accepts payment by bank transfer to the following bank account: ...). Please enter the name of the auction, the auction date and the object identification number in the transfer reference. Payment can also be made using the tools offered by the web service. ART ONE BID also accepts payments in selected cryptocurrencies.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>5.2.</p>
                    <p>The successful bidder is obliged to pay for the lot auctioned within 7 days from the day of the auction, irrespective of any export license or other authorisations obtained. Exceeding the set deadline will result in the possibility of ART ONE BID charging statutory interest for the period of delay in payment. </p>
                </div>
                <div className='flex space-x-6'>
                    <p>5.3.</p>
                    <p>Ownership of the purchased object does not pass to the auctioneer until ART ONE BID has received the full purchase price for the object, taking into account in particular the hammer price, the commission, additional fees and any other charges if applicable to the object.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>5.4.</p>
                    <p>ART ONE BID is not obliged to hand over the object to the auctioneer until the ownership of the object is transferred to the auctioneer. An earlier handing over of the object shall not be equivalent to the transfer of ownership of the object to the auctioneer nor shall it release the auctioneer from his obligation to pay the purchase price.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>5.5.</p>
                    <p>All transactions are carried out in US dollars. Upon request by the bidder, ART ONE BID accepts payments in Euros or British Pounds by prior arrangement.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>5.6.</p>
                    <p>The value of a transaction paid for in a currency other than US dollars will be increased by a handling fee of 1%. ART ONE BID makes the conversion at the daily average exchange rate of the day before the auction.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>5.7.</p>
                    <p>Without prejudice to its other rights, ART ONE BID in the event that the purchaser fails to pay the full purchase price, including the commission, additional fees and other charges, if applicable to the object in question within 7 days of the auction date ART ONE BID may, in particular:</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>a)</p>
                    <p>store the object at the headquarters of ART ONE BID or at another location at the risk and expense of the bidder;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>b)</p>
                    <p>withdraw the lot from the sale, retaining the fees paid to date as compensation for damages, provided that if the right of withdrawal is exercised, ART ONE BID may claim compensation for lost profits, including but not limited to the damage caused by the failure to obtain the commission, from the auctioneer;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>c)</p>
                    <p>institute legal proceedings against the auctioneer for the recovery of debts; </p>
                </div>
                <div className='flex space-x-6'>
                    <p>5.8.</p>
                    <p>If, by the date of recording sales on the cash register (on the date of issuing the fiscal receipt), the bidder is unsure whether he/she wishes to receive a markup VAT invoice, he/she should provide the cashier with the number by which he is identified for tax or value added tax purposes (NIP), in order to include this number on the fiscal receipt. ART ONE BID stipulates that it will not issue an invoice for the receipt, which will not include the purchaser`s NIP number, despite the request to do so within the statutory period.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>5.9.</p>
                    <p>ART ONE BID stipulates that in connection with participation in the online auction, the bidders shall not incur any additional costs for ART ONE BID. In this case, however, they may be required to pay fees resulting from the provision of such a service by the online service to Art1Bid. Detailed regulations in this matter are specified in Art1Bid`s terms and conditions accordingly.</p>
                </div>
                
            </div>
            <div id='section6' className='space-y-4'>
                <div className='flex space-x-10'>
                    <h2 className='font-extrabold'>6.</h2>
                    <h2 className='font-extrabold'>THE TRANSFER AND RECEIPT OF AN OBJECT OTHER THAN A TOKEN</h2>
                </div>
                <div className='flex space-x-6'>
                    <p>Transfer and receipt of the lot sold, except for the Token, shall take place in accordance with the provisions of sections 6.1. - 6.11. of the Terms and Conditions.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>6.1.</p>
                    <p>Receipt of the object auctioned is possible after payment of the full purchase price and settlement of other payments to ART ONE BID.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>6.2.</p>
                    <p>The physical painting is at the Gallery MAREK and SONS 12 Rue de la Grange Batelière, 75009 Paris, France</p>
                </div>
                <div className='flex space-x-6'>
                    <p>6.3.</p>
                    <p>When collecting the purchased object, the buyer is obliged to show a document confirming identity. The object may be handed over to the purchaser or a person with a written power of attorney, certified by a notary public, valid for the place and jurisdiction where the object is to be handed over.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>6.4.</p>
                    <p>To arrange collection of the property, the purchaser should contact ART ONE BID.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>6.5.</p>
                    <p>The bidder who has won the auction should collect the purchased object within 30 days from the date of the auction. After this deadline ART ONE BID will send all the objects auctioned to an external warehouse and the bidder will be charged for the costs of securing the object, transport and storage. After the expiry of 30 days from the date of the auction, the risk of loss and damage to the unclaimed object as well as the burdens associated with such object, including the costs of insuring it, shall pass to the bidder. This provision is without prejudice to clause 5.7.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>6.6.</p>
                    <p>ART ONE BID shall be liable to the auctioneer for damages for loss or damage to the object during a period of 30 days from the date of the auction, but only up to the amount of the purchase price of the object. This provision is without prejudice to clause 5.7.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>6.7.</p>
                    <p>ART ONE BID provides, free of charge, basic packaging of the object to enable its personal collection. At the auctioneer`s request, ART ONE BID can assist in contacting a specialised company for the packaging and shipping of objects. Such an order is carried out at the responsibility of the auctioneer, whereby ART ONE BID does not assume any responsibility for incorrect execution of services by carriers or other third parties.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>6.8.</p>
                    <p>If the auctioneer chooses a transport company, its representative must contact ART ONE BID by telephone at least 24 hours before the scheduled collection of the object on the following telephone number: +44 7547203325. In case of collection by a transport company chosen by the auctioneer, ART ONE BID requires the presentation of proof by its representative. The representative must additionally present written authorisation from the purchaser to collect the object.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>6.9.</p>
                    <p>Before the auction, bidders interested in exporting an object outside France are advised to find out about additional permits or other cross-border taxes.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>6.10.</p>
                    <p>ART ONE BID informs that objects made of plant or animal material may require additional permits or certificates before export. Obtaining documents allowing export is not the same as being able to import into another country. ART ONE BID marks objects of this type in the stock catalogues with the symbol [Ω], but ART ONE BID is not responsible for errors or omissions in the marking of objects containing items made from protected or regulated plant and animal species.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>6.11.</p>
                    <p>The impossibility or delay in obtaining the relevant documents authorising the export of the object outside France does not justify the withdrawal from the sale or the delay in paying the full purchase price for the object. ART ONE BID can assist you in contacting a specialised company dealing with formalities relating to the export of works of art.</p>
                </div>
                
            </div>
            <div id='section7' className='space-y-4'>
                <div className='flex space-x-10'>
                    <h2 className='font-extrabold'>7.</h2>
                    <h2 className='font-extrabold'>TRANSFER OF A TOKEN</h2>
                </div>
                <div className='flex space-x-6'>
                    <p>The transfer of the Token is carried out in accordance with the provisions of points 7.1. - 7.7. of the Terms and Conditions.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>7.1.</p>
                    <p>Transfer of the auctioned Token is possible after payment of the full purchase price and settlement of other payments to ART ONE BID.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>7.2.</p>
                    <p>Ownership of the Token will be transferred when the following conditions are jointly fulfilled: </p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>a)</p>
                    <p>ART ONE BID will confirm that the winning bidder has complied with all bidder identification and registration procedures;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>b)</p>
                    <p>ART ONE BID will receive the entire purchase price;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>c)</p>
                    <p>ART ONE BID will receive the address of the wallet supporting NFT Tokens belonging to the auctioneer who won the auction;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>d)</p>
                    <p>The token will be correctly linked to the buyer`s bidding wallet;</p>
                </div>
                <div className='flex space-x-6'>
                    <p>7.3.</p>
                    <p>Failure to comply with the conditions referred to in clause 7.2. may result in the inability to receive, transfer or access the Token and thus access the associated digital work, except for points c and d, which do not apply if the Bidder has agreed to transfer the Token through the cold wallet.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>7.4.</p>
                    <p>For the transfer of the Token by handing over the technical device containing the Token to the Auctioneer, the provisions of Chapter 6 shall also apply accordingly.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>7.5.</p>
                    <p>Risk and liability for the Token are transferred to the purchaser when the Token is transferred to the purchaser`s wallet.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>7.6.</p>
                    <p>The Purchaser shall be responsible for implementing reasonable measures to secure the wallet or other storage mechanism used by the Purchaser for the transaction and storage of Tokens, including any required private keys or other credentials necessary to access such storage mechanisms.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>7.7.</p>
                    <p>ART ONE BID is not responsible for the loss of private keys or other wallet access credentials. In case of loss of private keys or other credentials for access to the wallet, the purchaser accepts the risk of losing access to the Token, due to the fact that it is not reproducible. ART ONE BID does not provide a service for storing a digital work in any type of repository.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>7.8.</p>
                    <p>ART ONE BID is not responsible in the event that the digital work becomes unavailable to the purchaser for any reason after the sale and for any modifications or changes to the digital work, including its removal by the purchaser after uploading to the portfolio.</p>
                </div>
                
            </div>
            <div id='section8' className='space-y-4'>
                <div className='flex space-x-10'>
                    <h2 className='font-extrabold'>8.</h2>
                    <h2 className='font-extrabold'>DECLARATIONS BY THE PURCHASER CONCERNING THE AUCTION OF TOKENS</h2>
                </div>
                <div className='flex space-x-6'>
                    <p>8.1.</p>
                    <p>The Purchaser represents that the wallet to which ART ONE BID will transfer the Token is not owned by or affiliated with:</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>a)</p>
                    <p>a national or a person who is resident or located in a geographical area that is subject to sanctions or an embargo by the European Union, the United Kingdom, the United Nations or the United States; or</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>b)</p>
                    <p>an individual or person employed by or associated with an entity that appears on the U.S. Department of Commerce`s Denied Persons or Entity List, the U.S. Department of Treasury`s Specially Designated Nationals or Blocked Persons List or the U.S. Department of State`s Debarred Parties List or similar lists published by European Union, United Kingdom or United Nations authorities.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>8.2.</p>
                    <p>Registration for the auction means that the bidder accepts that due to the technology used, Tokens are high-risk crypto-assets and are vulnerable to cybercriminals.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>8.3.</p>
                    <p>In the case of untrue submission of the statement contained in paragraph 8.1, ART ONE BID has the right to withdraw from the sales contract within 7 days of becoming aware of the breach, and the purchaser will be obliged to return the Token within 7 days of receiving a request to do so from ART ONE BID.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>8.4.</p>
                    <p>The Purchaser acknowledges that the acquisition means that he/she acquires full ownership rights to the Token itself, including the right to store, sell and transfer it. Acquisition of the Token provides, with respect to the associated digital work, only the rights under generally applicable law and as expressly set forth in the description of the Token contained in these Terms and Conditions.</p>
                </div>
                
            </div>
            <div id='section9' className='space-y-4'>
                <div className='flex space-x-10'>
                    <h2 className='font-extrabold'>9.</h2>
                    <h2 className='font-extrabold'>RESPONSIBILITY</h2>
                </div>
                <div className='flex space-x-6'>
                    <p>9.1.</p>
                    <p>The total liability of ART ONE BID is limited exclusively to the purchase price of the object paid by the auctioneer, regardless of the nature of the damage.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>9.2.</p>
                    <p>ART ONE BID is not responsible for verbal errors occurring in the information provided to bidders and is not liable to any bidder for errors made during the auction or otherwise in connection with the sale of the object.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>9.3.</p>
                    <p>ART ONE BID is not obliged to pay interest on the purchase price.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>9.4.</p>
                    <p>ART ONE BID does not exercise warranty rights in respect of the object, nor does it guarantee that: </p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>a)</p>
                    <p>an object free from defects and errors; </p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>b)</p>
                    <p>defects and errors of the object (including, in the case of Token, also the digital work) will be corrected;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>c)</p>
                    <p>in the case of a Token, the Token, the digital work or the method of transferring the Token to the wallet are free from malware or other elements that may adversely affect the features or functionality of the Token or the digital work.</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>d)</p>
                    <p>in the case of a Token, the Token and the associated digital work have the characteristics of permanence, security, stability and integrity of the right of use.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>9.5.</p>
                    <p>ART ONE BID shall not be liable for any damage caused by the acts or omissions of entities for which it is not responsible, in particular courier and transport providers, storage providers, telecommunications provider, including the website, cryptocurrency exchange or cryptocurrency exchange, wallet provider or the artist himself.</p>
                </div>
                <div className='flex space-x-6'>
                    <p>9.6.</p>
                    <p>All possible complaints are dealt with in accordance with UK law.</p>
                </div>
            </div>
            <div id='section10' className='space-y-4'>
                <div className='flex space-x-8'>
                    <h2 className='font-extrabold'>10.</h2>
                    <h2 className='font-extrabold'>WITHDRAWAL FROM THE CONTRACT</h2>
                </div>
                <div className='flex space-x-4'>
                    <p>10.1.</p>
                    <p>ART ONE BID informs that buyers do not have the right to withdraw from the sales contract.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>10.2.</p>
                    <p>In addition to the cases specified in the Terms and Conditions, ART ONE BID has the right to withdraw from the execution of the sales contract, irrespective of the progress of its execution, in any case:</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>a)</p>
                    <p>a reasonable suspicion of money laundering or terrorist financing;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>b)</p>
                    <p>a reasonable suspicion of having committed a criminal offence, in particular an offence against trading;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>c)</p>
                    <p>where there is a reasonable suspicion that a transaction would be in breach of law, would circumvent the law or would be contrary to trade rules.</p>
                </div>
            </div>
            <div id='section11' className='space-y-4'>
                <div className='flex space-x-8'>
                    <h2 className='font-extrabold'>11.</h2>
                    <h2 className='font-extrabold'>COPYRIGHTS</h2>
                </div>
                <div className='flex space-x-4'>
                    <p>11.1.</p>
                    <p>Neither the transfer of copyright nor the granting of a licence shall take place with the sale of the object, unless otherwise stated in the terms of the auction.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>11.2.</p>
                    <p>The copyright for all photographs, illustrations and texts relating to the object, made by or for ART ONE BID, including the contents of this catalogue, are the property of ART ONE BID. They may not be used by others without the prior written consent of ART ONE BID.</p>
                </div>
            </div>
            <div id='section12' className='space-y-4'>
                <div className='flex space-x-8'>
                    <h2 className='font-extrabold'>12.</h2>
                    <h2 className='font-extrabold'>PERSONAL DATA</h2>
                </div>
                <div className='flex space-x-4'>
                    <p>12.1.</p>
                    <p>The opportunity to participate in auctions conducted by ART ONE BID entails the processing of the bidder`s personal data. ART ONE BID will process the entrusted personal data on its own behalf as controller within the meaning of Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).</p>
                </div>
                <div className='flex space-x-4'>
                    <p>12.2.</p>
                    <p>ART ONE BID will process your personal data to the extent necessary to enable you to take part in the auction and to conclude the sales contract by means of the auction, including in particular the extent specified in the order form or made available to ART ONE BID by online auction platforms, including in particular the name, surname, email address, number and series of the bidder`s identity card and the bidder`s bank account number (in the case of conclusion of the sales contract).</p>
                </div>
                <div className='flex space-x-4'>
                    <p>12.3.</p>
                    <p>ART ONE BID will process the bidder`s personal data for the purpose of:</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>a)</p>
                    <p>necessary to enter into, form the contents of, amend or terminate the sales contract and for the proper performance of services provided by electronic means, in particular participation in an auction via an auction service </p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>b)</p>
                    <p>complaints handling </p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>c)</p>
                    <p>to establish, assert or defend against any claim made against ART ONE BID </p>
                </div>
                <div className='flex space-x-4'>
                    <p>12.4.</p>
                    <p>The provision of the above-mentioned personal data is voluntary, however, necessary for the bidder to be admitted to the auction, to conclude and perform the sales contract and to settle it.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>12.5.</p>
                    <p>ART ONE BID may transfer personal data to other entities that will process it, in particular: </p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>a)</p>
                    <p>entities running postal, courier, transport and storage activity;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>b)</p>
                    <p>banks, where settlements need to be carried out;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>c)</p>
                    <p>entities supporting ART ONE BID in carrying out its activities on behalf of ART ONE BID, in particular IT providers, accountants, entities in the field of legal services.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>12.6.</p>
                    <p>The entities to which ART ONE BID entrusts the processing of personal data perform tasks on the basis of a contract concluded with NFT. These entities carry out the indicated activities on behalf of NFT and have access to personal data to the extent necessary to carry out the tasks entrusted to them.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>12.7.</p>
                    <p>The data provided to ART ONE BID will be processed for the time necessary for the execution of the sales contract, not longer than the statute of limitations for claims under the contract.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>12.8.</p>
                    <p>Personal data subjects have the right under the terms of the GDPR to:</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>a)</p>
                    <p>access to the content of their data;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>b)</p>
                    <p>rectification of data;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>c)</p>
                    <p>deletion of data;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>d)</p>
                    <p>the restriction of data processing; </p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>e)</p>
                    <p>data portability;</p>
                </div>
                <div className='flex space-x-3'>
                    <p className='ml-16'></p>
                    <p>f)</p>
                    <p>to object to the processing of data.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>12.9.</p>
                    <p>The exercise of the rights referred to above can be done by indicating your requests to the e-mail address: [info@art1bid.com] or in writing to ART ONE BID`s registered office address.</p>
                </div>
                <div className='flex space-x-2'>
                    <p>12.10.</p>
                    <p>The exercise of some of the rights listed in Section 13.7 above may be limited or excluded.</p>
                </div>
                <div className='flex space-x-2'>
                    <p>12.11.</p>
                    <p>The personal data processed comes directly from the auctioneer, as well as from publicly available registers kept and made available on the basis of the law.</p>
                </div>
            </div>
            <div id='section13' className='space-y-4'>
                <div className='flex space-x-8'>
                    <h2 className='font-extrabold'>13.</h2>
                    <h2 className='font-extrabold'>FINAL PROVISIONS</h2>
                </div>
                <div className='flex space-x-4'>
                    <p>13.1.</p>
                    <p>The Regulations shall enter into force on [22/05/2022 ].</p>
                </div>
                <div className='flex space-x-4'>
                    <p>13.2.</p>
                    <p>If any provision of these terms and conditions should prove to be invalid, ineffective or</p>
                </div>
                <div className='flex space-x-4'>
                    <p>13.3.</p>
                    <p>ART ONE BID indicates the address of the online dispute resolution platform of the European Union: ec.europa.eu/consumers/odr. In addition, ART ONE BID informs the consumer of the possibility of using out-of-court complaint and redress procedures. These are voluntary for both the consumer and ART ONE BID.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>13.4.</p>
                    <p>These terms and conditions and all non-contractual obligations arising out of or in connection with them shall be governed by Polish law.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>13.5.</p>
                    <p>The terms and conditions may be amended by ART ONE BID through addenda available on ART ONE BID`s website or by communicating the amended terms and conditions, together with their new wording, electronically using the form of communication communicated to ART ONE BID as preferred.</p>
                </div>
                <div className='flex space-x-4'>
                    <p>13.6.</p>
                    <p>ailure to act or delay in exercising rights under the Terms of Use shall not constitute a waiver of rights or discharge of obligations, nor shall it waive the validity of all or any part of the Terms and Conditions.</p>
                </div>
                
            </div>
            <div id='sectionAnnex' className='space-y-4'>
                <div className='flex space-x-8'>
                    <h2>Annex 1</h2>
                </div>
                <div className='flex space-x-8'>
                    <h2 className='font-extrabold'>INFORMATION FOR THE TOKEN PURCHASER</h2>
                </div>
                <div className='flex space-x-10'>
                    <p>1.</p>
                    <p>Upon acquiring a Token, the auctioneer, as a general rule, does not acquire any property rights or grant any licence, unless otherwise stated in the terms and conditions of the auction.</p>
                </div>
                <div className='flex space-x-10'>
                    <p>2.</p>
                    <p>The purchase of an NFT Token does not imply the acquisition of any proprietary rights to The Commission shall not be obliged to transfer any rights to the Digital Content or any entitlement thereto other than those expressly mentioned in the terms and conditions of the auction.</p>
                </div>
                <div className='flex space-x-10'>
                    <p>3.</p>
                    <p>The fact that NFT Token transactions are created and stored on the blockchain means that they can be sold by transferring them between digital wallets.</p>
                </div>
                
            </div>
        </div>

      </div>
      {/* {loading ? <p>Loading...</p> :
        bidders.map(bidder => {
          <div className='w-auto flex text-white bg-white'>
            <p>{bidder.name}</p>
            <p>{bidder.bid}</p>
          </div>
        })
      } */}
    </main>

    <footer className='text-center flex justify-center items-center text-white mb-4'>
      <div className=''>All right reserved. Designed & developed by Art1Bid 2022</div>
    </footer>

  </div>
  )
}
