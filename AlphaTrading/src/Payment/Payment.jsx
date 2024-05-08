import React, { useState, useRef } from "react";
import axios from 'axios';
import { TbCurrencyNaira } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Header from "../HomePage/Header";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from 'react-spinners';



export const Payment = () => {
  const [transaction, setTransaction] = useState(false);
  const transactionRef = useRef(null);
  const [usdtPayment, setUsdtPayemnt] = useState(false);
  const headerRef = useRef(null);

  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [profileImage, setProfileImageFile] = useState(null);
  const [paymentProve, setPaymentProve] = useState(null);
  const [proofOfPayment, setProofOfPayment] = useState(null);


const [firstName, setFirstName] = useState("");
const [firstNameValid, setFirstNameValid] = useState(true);
const [lastName, setLastName] = useState("");
const [lastNameValid, setLastNameValid] = useState(true);
const [phoneNumber, setPhoneNumber] = useState("");
const [phoneNumberValid, setPhoneNumberValid] = useState(true);
const [email, setEmail] = useState("");
const [emailValid, setEmailValid] = useState(true);
const [selectedState, setSelectedState] = useState("");
const [selectedStateValid, setSelectedStateValid] = useState(true);
const [isLoading, setIsLoading] = useState(false);





const handleFirstNameChange = (e) => {
  const value = e.target.value;
  setFirstName(value)
  setFirstNameValid(value !== "");
}

const handleLastNameChange = (e) => {
  const value = e.target.value;
  setLastName(value)
  setLastNameValid(value !== "")
}

const handlePhoneNumberChange = (e) =>{
  const value = e.target.value;
  setPhoneNumber(value)
  setPhoneNumberValid(value.length > 0)
}

const handleEmailChange = (e) =>{
  const value = e.target.value
  setEmail(value)
  setEmailValid(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))
}

const handleStateChange = (e) => {
  const value = e.target.value;
  setSelectedState(value);
  setSelectedStateValid(value.length > 1);
};

  const nav = useNavigate();

  const handleTransaction = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setTransaction(!transaction);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
      setProfileImageUrl(URL.createObjectURL(file));
    }
  };

  const handlePaymentProve = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProofOfPayment(file); 
      setPaymentProve(URL.createObjectURL(file));
    }
  };

  const handleUsdtPayment = () => {
    setUsdtPayemnt(!usdtPayment);
  };



const handleRegistration = async (e) =>{
  console.log("loading...")
  e.preventDefault();
  if(!firstName || !lastName || !phoneNumber || !email || !selectedState){
    toast.error('please fill in all input fields.',{
    })
    console.log('please fill in all input fields.')
    
    return;
  }

  if (!firstNameValid || !lastNameValid || !phoneNumberValid || !emailValid || !selectedStateValid) {
    toast.error('Please enter valid information.');
    return;
  }

  if (!profileImage) {
    toast.error("Please upload your profile image.");
    return;
  }

  
  if (!proofOfPayment) {
    toast.error("Please upload your payment proof.");
    return;
  }

  setIsLoading(true);



  try{

    const formData = new FormData();


    formData.append('firstName', firstName.trim());
    formData.append('lastName', lastName.trim());
    formData.append('phoneNumber', phoneNumber.trim());
    formData.append('email', email.trim());
    formData.append('state', selectedState);


    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    if (proofOfPayment) {
      formData.append('proofOfPayment', proofOfPayment);
    }
    const response = await axios.post('https://alpha-trading.onrender.com/api/sign-up',formData)
  
    console.log( "Registration successful:", response.data);

    toast.success("Registration successful!")


    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setSelectedState('');
    setProfileImageUrl(null);
    setProfileImageFile(null);
    setPaymentProve(null);
    setProofOfPayment(null);


  } catch (error) {

    console.log('Error registering:', error.response.data.message)
    toast.error(error.response.data.message)
  
  } finally {
    setIsLoading(false)

  }
}



  
  return (
    <div className="w-full h-max bg-black text-sm relative">
    

      <Header ref={headerRef} />


      <ToastContainer
        position="top-center"
        toastClassName="bg-white text-black"
        />

      <form onSubmit={handleRegistration}>
      <div className="w-full h-max flex justify-center bg-white ">
        <div className="w-[88%] h-max flex justify-between  flex-col md:flex-row ">
          <div className="md:w-[500px] md:h-max ms:w-[100%] ms:h-max bg-white mt-10 flex flex-col gap-3">
            <h1 className="font-bold">Biling details</h1>
           
            <div className="flex flex-col gap-2">
              <div className="w-full h-[70px] flex justify-between items-center">
                <div className="w-[45%] h-full">

                <input
                  type="text"
                  placeholder="First name"
                  className="w-full h-[80%] border-2 pl-4 rounded-xl outline-none"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
                {!firstNameValid && <p className=" text-red-500 text-xs">First name is required</p>}
                </div>

              <div className="w-[45%] h-full">
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full h-[80%] border-2 pl-4 rounded-xl outline-none"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
                {!lastNameValid && <p className=" text-red-500 text-xs">Last name is required </p>}
              </div>
              </div>

              <div className="w-full h-[70px] flex flex-col justify-center items-center">
                <input
                  type="number"
                  maxLength={11}
                  placeholder="Phone number"
                  className="w-full h-[80%] border-2 pl-4 rounded-xl outline-none"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                {!phoneNumberValid && <p  className=" text-red-500 text-xs w-full">Phone number is required</p>}
              </div>

              <div className="w-full h-[70px] flex flex-col justify-center items-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[80%] border-2 pl-4 rounded-xl outline-none"
                  value={email}
                  onChange={handleEmailChange}
                />
                {!emailValid && <p className=" text-red-500 text-xs">Invalid email address</p>}
              </div>

              <div className="w-full h-[70px] flex justify-center items-center">
                <select
                 className="w-full h-[80%] border-2 pl-4 rounded-xl outline-none"
                 value={selectedState}
                 onChange={handleStateChange}
                 >
                  <option value="">Select State</option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </select>
                {!selectedStateValid && <p className="text-red-500 text-xs">State is required</p>}
              </div>

              <div className="w-full h-[190px]  flex justify-between items-center gap-5">
                <div className="w-[45%] h-full flex flex-col gap-2">
                  <p className="ms:text-xs md:text-sm">
                    Upload your profile image
                  </p>
                  <div className="w-full h-[90%] relative border-2 rounded-2xl">
                    <input
                      onChange={handleProfileImageChange}
                      type="file"
                      accept="image/*"
                      className="opacity-0 absolute w-full h-full cursor-pointer inset-0 z-50"
                    />
                    {profileImageUrl && (
                      <div>
                        <img
                          src={profileImageUrl}
                          alt="Profile"
                          className="w-full h-full rounded-2xl absolute top-0 "
                        />
                      </div>
                    )}
                    {!profileImageUrl && (
                      <FaPlus
                        onClick={handleProfileImageChange}
                        className="md:top-[70px] md:absolute md:right-[89px] ms:top-[60px] ms:absolute ms:right-[55px] text-4xl cursor-pointer text-gray-500"
                      />
                    )}
                  </div>
                </div>

                <div className="w-[45%] h-full flex flex-col gap-2">
                  <p className="ms:text-xs md:text-sm">
                    Upload prove of payment
                  </p>
                  <div className="w-full h-full relative border-2 rounded-2xl">
                    <input
                      onChange={handlePaymentProve}
                      type="file"
                      className="border-2 border-gray-300 h-full w-full rounded-xl inset-0 Z-50 opacity-0 "
                    />
                    {paymentProve && (
                      <div>
                        <img
                          src={paymentProve}
                          alt="prove"
                          className="w-full h-full absolute top-0 rounded-2xl"
                        />
                      </div>
                    )}
                    {!paymentProve && (
                      <FaPlus
                        onClick={handlePaymentProve}
                        className="md:top-[70px] md:absolute md:right-[89px] ms:top-[60px] ms:absolute ms:right-[55px] text-4xl cursor-pointer text-gray-500"
                      />
                    )}
                  </div>
                </div>
              </div>

              <h1 className="w-full h-[80px] flex items-center">
                Make sure you are using your collect details{" "}
              </h1>
            </div>
          </div>

          <div className="md:w-[360px] md:h-[600px] ms:w-[100%] ms:h-[600px]  border-2 mt-10 flex flex-col items-center gap-5">
            <div className="w-[90%] h-[50px] flex justify-between mt-5">
              <p className="w-[50%] h-[50px] flex justify-between items-center">
                Select Mentorship type
              </p>
              <button
                className="w-[40%] h=[70%] bg-black text-white rounded-xl"
                onClick={handleTransaction}
                type="button"
              >
                Make Payment
              </button>
            </div>
            <div className="w-[90%] h-[50px] flex justify-between items-center border-t-2 ">
              <p>Mentorship Type</p>
              <p>Amount</p>
            </div>

            <div className="w-[90%] h-[60px] flex justify-between items-center border-t-2 ">
              <p>Registration</p>
              <div className="flex flex-col gap-2 w-[50%] justify-center items-end">
                <p className="flex items-center border-b-2 w-[70px] justify-center">
                  $5
                </p>
                <p className="flex items-center justify-center">
                  Total= <TbCurrencyNaira />
                  6500
                </p>
              </div>
            </div>

            <div className="w-[90%] h-[60px] flex justify-between items-center border-t-2">
              <p>Private</p>
              <div className="flex flex-col gap-2 w-[50%] justify-center items-end">
                <p className="flex items-center border-b-2 w-[70px] justify-center">
                  $50
                </p>
                <p className="flex items-center justify-center">
                  Total= <TbCurrencyNaira />
                  65,000
                </p>
              </div>
            </div>

            <h1 className="text-red-500 w-[90%]">NO REFUND POLICY</h1>
            <p className="w-[90%] text-gray-500">
              {" "}
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy{" "}
            </p>

            <button
              className="w-[80%] h-[50px] bg-black text-white font-bold rounded-xl"
              type="submit"
            >
              {isLoading ? <BeatLoader color="#ffffff" size={8} /> : "REGISTER"}
            </button>

            <div
              ref={transactionRef}
              className={`faq-answer w-[50vw] h-[10vh] md:w-[30%] md:h-max bg-white  ms:w-[90%] ms:h-max md:pb-10 md:pt-8 ms:pb-10 ms:pt-8 shadow-lg absolute top-0  md:right-12 ms:right-5 flex flex-col justify-center items-center transition-opacity duration-500 ${
                transaction ? "opacity-100 h-auto" : "opacity-0 h-0"
              }`}
              style={{ visibility: transaction ? "visible" : "hidden" }}
            >
              <div className="w-[90%] h-[60px] flex gap-32 ">
                <span className="w-[30%] h-[40%" onClick={handleTransaction}>
                  <MdOutlineCancel className="font-bold text-2xl cursor-pointer" />
                </span>
                <h1 className="font-bold">Transfer</h1>
              </div>

              <div className="w-[90%] h-max flex flex-col gap-5">
                <div className="flex w-full h-[30px] justify-between">
                  <p className="font-semibold">Account name:</p>
                  <p>FRANK IKENGA ONYEDIKA</p>
                </div>

                <div className="flex w-full h-[30px] justify-between">
                  <p className="font-semibold">Account number:</p>
                  <p>3191122878</p>
                </div>

                <div className="flex w-full h-[30px] justify-between">
                  <p className=" text-sm font-semibold">Bank name:</p>
                  <p>First Bank</p>
                </div>

                <div className="flex w-full h-[30px] justify-between">
                  <h1>You can also make your Payment with USDT</h1>
                  <FaCaretDown onClick={handleUsdtPayment} />
                </div>

                <div
                  className={`w-full h-max flex flex-col justify-center items-center gap-4 transition-opacity duration-500 ${
                    usdtPayment ? "opacity-100 " : "opacity-0 h-0"
                  }`}
                  style={{
                    height: usdtPayment ? "auto" : "0",
                    overflow: "hidden",
                  }}
                >
                  <p>TRC20</p>
                  <p>TZ4ffWuGVyJvABZ8zNGchp7g4SAAzt52bb</p>
                  <img src="./src/assets/CODE.png" />
          
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </form>

      <div className=' fixed top-[91%] right-7 bg-fixed shadow-lg z-0'>
          <a href='https://wa.me/2349046270535'> <img src='./src/assets/whatsapp.png'/> </a>
        </div>
    </div>
  );
};
