import React, { useEffect, useState } from 'react';
import './MarketPlace.css';
import { useDispatch, useSelector } from "react-redux";
import styles from './MarketPlace.module.css'
import { AiTwotoneCopy } from 'react-icons/ai';
import { useHistory } from "react-router";
import classNames from 'classnames';



export const MarketPlace =()=>{
    const history = useHistory();
    const [myState,SetmyState] = useState({
        bidding_tokenid:'',
        bidding_bid:'',
        listNFTforsale_tokenid:'',
        nftBuy_tokenid:'',
        stopBid_tokenid:'',
        getHeigestBid_tokenid:'',

        receipt_of_highestBid:''

    })
    const storeData = useSelector((state) => state.data);
    const blockchain = useSelector((state) => {console.log('checking bchain',state.blockchain); return state.blockchain});

    useEffect(()=>{SetmyState({...myState, bidding_bid:storeData.nft_token})},[storeData])
    // const storeData = useSelector((state) => { SetmyState({...myState, bidding_bid:state.data.nft_token})});
    
    const listForNftFunction = () => {
        console.log('Approver running ... ',myState.listNFTforsale_tokenid, blockchain.account3)
        blockchain.smartContract3.methods
        .listNFTforsale(myState.listNFTforsale_tokenid)
        .send({ from: blockchain.account3})
        .once("error",(err) => {
          console.log(err) ;
        })
        .then((receipt)=>{
          console.log("receipt: ",receipt);
        //   setLoading(false);
          // setMyState({...myState, nftToken:receipt.events.Transfer.returnValues.tokenId})
          // dispatch(setDataTokenToStore(receipt.events.Transfer.returnValues.tokenId))
        //   setStatus("successfully approved your coins to marketplace :) !");
        })
        .catch(e=>{
          console.log('Aprrover NFT Token : ',e)
        })
      }

      const biddingFunc = () => {
        console.log('Approver running ... ')
        blockchain.smartContract3.methods
        .bidding(myState.bidding_tokenid,myState.bidding_bid)
        .send({ from: blockchain.account3})
        .once("error",(err) => {
          console.log(err) ;
        })
        .then((receipt)=>{
          console.log("receipt: ",receipt);
        //   setLoading(false);
          // setMyState({...myState, nftToken:receipt.events.Transfer.returnValues.tokenId})
          // dispatch(setDataTokenToStore(receipt.events.Transfer.returnValues.tokenId))
        //   setStatus("successfully approved your coins to marketplace :) !");
        })
        .catch(e=>{
          console.log('Aprrover NFT Token : ',e)
        })
      }

      const stopBiddingFunc = () => {
        console.log('Approver running ... ')
        blockchain.smartContract3.methods
        .stopBid(myState.stopBid_tokenid)
        .send({ from: blockchain.account3})
        .once("error",(err) => {
          console.log(err) ;
        })
        .then((receipt)=>{
          console.log("receipt: ",receipt);
        //   setLoading(false);
          // setMyState({...myState, nftToken:receipt.events.Transfer.returnValues.tokenId})
          // dispatch(setDataTokenToStore(receipt.events.Transfer.returnValues.tokenId))
        //   setStatus("successfully approved your coins to marketplace :) !");
        })
        .catch(e=>{
          console.log('Aprrover NFT Token : ',e)
        })
      }
      
      const buyNftFunc = () => {
        console.log('Approver running ... ')
        blockchain.smartContract3.methods
        .nftBuy(myState.nftBuy_tokenid)
        .send({ from: blockchain.account3})
        .once("error",(err) => {
          console.log(err) ;
        })
        .then((receipt)=>{
          console.log("receipt: ",receipt);
        //   setLoading(false);
          // setMyState({...myState, nftToken:receipt.events.Transfer.returnValues.tokenId})
          // dispatch(setDataTokenToStore(receipt.events.Transfer.returnValues.tokenId))
        //   setStatus("successfully approved your coins to marketplace :) !");
        })
        .catch(e=>{
          console.log('Aprrover NFT Token : ',e)
        })
      }

      const getHighestBidFunc = () => {
        console.log('Approver running ... ',myState.getHeigestBid_tokenid, blockchain.account3)
        blockchain.smartContract3.methods.getHeigestBid(myState.getHeigestBid_tokenid)
        .call({from:blockchain.account3})
        // .once("error",(err) => {
        //   console.log(err) ;
        // })
        .then((receipt)=>{
          console.log("receipt: ",receipt);
          SetmyState({...myState,receipt_of_highestBid:receipt})
        //   setLoading(false);
          // setMyState({...myState, nftToken:receipt.events.Transfer.returnValues.tokenId})
          // dispatch(setDataTokenToStore(receipt.events.Transfer.returnValues.tokenId))
        //   setStatus("successfully approved your coins to marketplace :) !");
        })
        .catch(e=>{
          console.log('Aprrover NFT Token : ',e)
        })
      }

    const getAllBids = () => {
      console.log('Approver running ... ',myState.getHeigestBid_tokenid, blockchain.account3)
      blockchain.smartContract3.Bid.then(res=>{
        console.log(res);
    })
      
      
      // .getHeigestBid(myState.getHeigestBid_tokenid)
      // .call({from:blockchain.account3})
      // // .once("error",(err) => {
      // //   console.log(err) ;
      // // })
      // .then((receipt)=>{
      //   console.log("receipt: ",receipt);
      //   SetmyState({...myState,receipt_of_highestBid:receipt})
      // //   setLoading(false);
      //   // setMyState({...myState, nftToken:receipt.events.Transfer.returnValues.tokenId})
      //   // dispatch(setDataTokenToStore(receipt.events.Transfer.returnValues.tokenId))
      // //   setStatus("successfully approved your coins to marketplace :) !");
      // })
      // .catch(e=>{
      //   console.log('Aprrover NFT Token : ',e)
      // })
    }

    return  <div className='market-place'>
                {console.log(storeData)}
                <div className='row'>
                    <div className='col-md-12 mt-4 text-center text-white'>
                        <span className='header'>Maket Place</span>
                    </div>
                    <div className='col-md-12 mt-5 d-flex justify-content-center'>
                        <div className='custom-card-body'>
                            <div className={classNames('row mt-3', styles.rowStyles)}>
                                <div className='col-md-12'>
                                    List NFT for sale
                                </div>
                                <div className='col-md-5'>
                                    <div style={{widthL:'100%',float:'right'}}>Token Id</div>
                                </div>
                                <div className='col-md-7'>
                                    <input type="number"  value={myState.listNFTforsale_tokenid} onChange={(e)=>SetmyState({...myState,listNFTforsale_tokenid:e.target.value})}  placeholder='' className='form-control' />
                                </div>
                                <div className='col-md-12 mt-2'>
                                    <button className='btn btn-warning'onClick={()=>listForNftFunction()} style={{float:'right'}}>transact</button> <AiTwotoneCopy color={'#fff'} size={20}  style={{float:'right'}}></AiTwotoneCopy> 
                                </div>
                            </div>
                            <div className={classNames('row mt-3', styles.rowStyles)}>
                                <div className='col-md-12'>
                                    Transfer NFT
                                </div>
                                <div className='col-md-5'>
                                    <div style={{widthL:'100%',float:'right'}}>Token Id</div>
                                </div>
                                <div className='col-md-7'>
                                    <input type="number"  value={myState.nftBuy_tokenid} onChange={(e)=>SetmyState({...myState,nftBuy_tokenid:e.target.value})}  placeholder='' className='form-control' />
                                </div>
                                <div className='col-md-12 mt-2'>
                                    <button className='btn btn-warning' onClick={buyNftFunc} style={{float:'right'}}>transact</button> <AiTwotoneCopy color={'#fff'} size={20}  style={{float:'right'}}></AiTwotoneCopy> 
                                </div>
                            </div>

                            <div className={classNames('row mt-3', styles.rowStyles)}>
                                <div className='col-md-12'>
                                    Stop Bid
                                </div>
                                <div className='col-md-5'>
                                    <div style={{widthL:'100%',float:'right'}}>Token Id</div>
                                </div>
                                <div className='col-md-7'>
                                    <input type="number" value={myState.stopBid_tokenid} onChange={(e)=>SetmyState({...myState,stopBid_tokenid:e.target.value})}   placeholder='' className='form-control' />
                                </div>
                                <div className='col-md-12 mt-2'>
                                    <button className='btn btn-warning' onClick={stopBiddingFunc} style={{float:'right'}}>transact</button> <AiTwotoneCopy color={'#fff'} size={20}  style={{float:'right'}}></AiTwotoneCopy> 
                                </div>
                            </div>
                            <div className={classNames('row mt-5', styles.rowStyles)}>
                            <div className='col-md-12'>
                                    {/* <button className='btn btn-info'>contractaddress</button> */}
                                </div>
                                <div className='col-md-12 mt-2'>
                                    Get Highest Bid
                                </div>
                                <div className='col-md-5'>
                                    <div style={{widthL:'100%',float:'right'}}>Token Id</div>
                                </div>
                                <div className='col-md-7'>
                                    <input type="number"  value={myState.getHeigestBid_tokenid} onChange={(e)=>SetmyState({...myState,getHeigestBid_tokenid:e.target.value})}  placeholder='' className='form-control' />
                                </div>
                                <div className='col-md-12 mt-2'>
                                &nbsp;&nbsp;&nbsp;<button className='btn btn-info' onClick={()=>getHighestBidFunc()} style={{float:'right'}}>call</button> <AiTwotoneCopy color={'#fff'} size={20}  style={{float:'right'}}></AiTwotoneCopy> &nbsp;&nbsp;&nbsp;
                                </div>
                                <div className='col-md-12 mt-2 mb- text-white'>
                                {myState.receipt_of_highestBid !='' && <div className='row'>
                                          <div className='col-md-3 text-info'>Bid Winner (address)</div><div className='col-md-1 text-info'>:</div><div  className='col-md-8'>{myState.receipt_of_highestBid[0]}</div>
                                          <div className='col-md-3 text-info'>Highest Bid Amount</div><div className='col-md-1 text-info'>:</div><div  className='col-md-8'>{myState.receipt_of_highestBid[1]}</div>
                                          <div className='col-md-3 text-info'>Bid Status</div><div className='col-md-1 text-info'>:</div><div  className='col-md-8'>{myState.receipt_of_highestBid[2]==true?<span className='text-success'>ACTIVE</span>:<span className='text-danger'>CLOSED</span>}</div>
                                       
                                    </div>}
                                </div>
                            </div>
                             <div className='row mt-5'>
                                <div className='col-md-12'>
                                  <button className='btn btn-secondary' onClick={()=>{
                                    getAllBids();
                                  }}>Get All Bids Coming In</button>
                                </div>
                            </div>
                            {/* <div className='row mt-2'>
                                <div className='col-md-12'>
                                  <button className='btn btn-secondary' onClick={()=>history.push('/nft-bidding-place')}>Navigate to Bidding</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
}