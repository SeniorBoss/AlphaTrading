import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";
import { SiTicktick } from "react-icons/si";
import { IoWarningSharp } from "react-icons/io5";
import { BeatLoader } from "react-spinners";

export const PaymentComp = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDecline, setIsLoadingDecline] = useState(false);
  const [isLoadingApprove, setIsLoadingApprove] = useState(false);




  
  const token = useSelector(
    (state) => state.alphaTrading.alphaTrading.userToken
  );
  const user = useSelector((state) => state.alphaTrading.alphaTrading.user);
  console.log(user);
  const fetchStudents = async () => {
    console.log("see token:", token);
    try {
      const response = await axios.get(
        "https://alpha-trading.onrender.com/api/admin/all-students",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStudents(response?.data?.data);
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching students:", error);
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized access");
      } else {
        console.log("An error occurred while fetching students.");
        setIsLoading(false);
      }
    }
  };

  const handleDecline = async (student) => {
    try {
      const response = await axios.patch(
        `https://alpha-trading.onrender.com/api/admin/decline-payment/${student._id}`,
        student,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Decline success:", response);
      fetchStudents();
    } catch (error) {
      console.error("Error declining payment:", error);
    }
  };

  const handleApprove = async (student) => {
    // console.log(student)
    try {
      const response = await axios.patch(
        `https://alpha-trading.onrender.com/api/admin/approve-payment/${student._id}`,
        student,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Approve success:", response);
      // Refresh students after approving payment
      fetchStudents();
    } catch (error) {
      console.error("Error approving payment:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const approvedStudents = students.filter(
    (student) => student.status === "Approved"
  );
  const declinedStudents = students.filter(
    (student) => student.status === "Declined"
  );

  console.log("All Approved students are:", approvedStudents);
  console.log("All Declined students are:", declinedStudents);

  return (
    <div className="w-[90%] h-[100vh] flex flex-col justify-between overflow-y-auto scrollbar-hidden transition-all duration-1000">
      <div className="h-full">
        <div className="h-max w-full flex flex-col gap-5">
          <SearchBar />
          <div className="w-full h-max bg-white rounded-2xl flex flex-col items-center gap-3">
            <div className="w-[90%] h-[22%]  flex  justify-between items-center">
              <div className="w-[30%] h-[100%] justify-center flex flex-col">
                <h1 className=" text-2xl font-bold">Payment</h1>
                <h1 className=" text-sm  text-gray-500">
                  {students.length} Total
                </h1>
              </div>
              <div className="w-[20%] h-[80%] flex justify-between">
                <div className="w-[50%] h-full items-center justify-center flex flex-col border-r-2">
                  <h1 className=" text-3xl font-bold">
                    {approvedStudents.length}
                  </h1>
                  <p className=" text-sm  text-gray-500">Approved</p>
                </div>
                <div className="w-[50%] h-full items-center justify-center flex flex-col">
                  <h1 className=" text-3xl font-bold">
                    {declinedStudents.length}
                  </h1>
                  <p className=" text-sm  text-gray-500">Declined</p>
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[11%] flex items-center border-t-2 border-b-2 justify-between">
              <h1 className=" w-[19%] h-[70%] items-center flex text-sm text-gray-600">
                Name
              </h1>
              <h1 className=" w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center">
                Number
              </h1>
              <h1 className=" w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center">
                confirm
              </h1>
            </div>

            {isLoading ? (
              <div className="w-full h-[500px] bg-slate-200 flex justify-center items-center">
                <BeatLoader color="#000" size={24} />
              </div>
            ) : (
              <div className="w-[90%] h-max flex flex-col gap-1 relative">
                {students.map((student, index) => (
                  <div
                    key={index}
                    className="w-full h-[40px] flex justify-between items-center"
                  >
                    <div className="w-[27%] h-[70%] items-center flex  gap-2">
                      <div className="w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center">
                        <img
                          src={student.profileImage}
                          alt="Description"
                          className="w-full h-[20px]  object-contain"
                        />
                      </div>
                      <h1 className=" text-sm">
                        {student.firstName} {student.lastName}
                      </h1>
                    </div>
                    <div className="w-[18%] h-[70%] items-center flex ">
                      <h1>{student.phoneNumber}</h1>
                    </div>

                    {student.status === "Approved" ? (
                      <div className="w-[19%] h-[100%] items-center justify-center flex gap-5">
                        <SiTicktick className=" text-2xl text-green-700" />
                      </div>
                    ) : student.status === "Declined" ? (
                      <div className="w-[19%] h-[100%] items-center justify-center flex gap-5">
                        <IoWarningSharp className=" text-red-600 text-2xl" />
                      </div>
                    ) : (
                      <div className="w-[19%] h-[100%] items-center justify-center flex gap-5">
                        <button
                          className="w-[80px] h-[26px] bg-white text-black rounded-xl font-bold text-xs cursor-pointer border-2 border-black"
                          onClick={() => handleDecline(student)}
                       
                        >
                       Decline
                        </button>

                        <button
                          className="w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer"
                          onClick={() => handleApprove(student)}
                        >
                          Approve
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
