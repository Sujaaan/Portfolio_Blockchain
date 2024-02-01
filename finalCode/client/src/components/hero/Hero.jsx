import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [description,setDescription]=useState("");
    const [cid,setCid]=useState("");
    useEffect(()=>{
      const {contract}=state;
      const description=async()=>{
        const descriptionText = await contract.methods.description().call();
        setDescription(descriptionText);
      }
      contract && description();
    },[state])
    useEffect(()=>{
        const {contract}=state;
        const cidOfImage=async()=>{
          const cid = await contract.methods.imageLink().call();
          setCid("Qmam2F2Bqh5vn4mSBdZq3Fv3rP4ouxjWbBHh2UZ4c1B7pX");
        }
        contract && cidOfImage();
      },[state])
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>SUJAN S </span>
                    I'm a 3rd year in NITK.</p>
                <h1>I'm a developer and an enthusiast to learn new skills.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - sujan.sudhakar31@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://gateway.pinata.cloud/ipfs/${"Qmam2F2Bqh5vn4mSBdZq3Fv3rP4ouxjWbBHh2UZ4c1B7pX"}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
