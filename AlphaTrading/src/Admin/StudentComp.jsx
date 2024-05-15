import { useEffect, useState } from "react";
import React from "react";
import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import axios from "axios";

export const StudentComp = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector(
    (state) => state.alphaTrading.alphaTrading.userToken
  );
  const fetchStudents = async () => {
    console.log("see token:", token);
    try {
      const response = await axios.get(
        "https://alpha-trading.onrender.com/api/admin/approved-students",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStudents(response?.data?.data);
      console.log(response);
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching students:", error);
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized access");
      } else {
        console.log("An error occurred while fetching students.");
        setIsLoading(false)
      }
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);
//   console.log(students);

  return (
    <div
      className="w-[90%] h-[100vh] flex flex-col justify-between overflow-y-auto scrollbar-hidden transition-all duration-1000"
      style={{
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="h-full">
        <div className="h-max w-full flex flex-col gap-5">
          <SearchBar />

          <div className="w-full h-max bg-white rounded-2xl flex flex-col items-center gap-3">
            <div className="w-[90%] h-[22%]  flex  justify-between items-center">
              <div className=" w-[30%] h-[100%] justify-center flex flex-col">
                <h1 className=" text-2xl font-bold">Total Student</h1>
                <h1 className=" text-sm  text-gray-500"> {students.length} Total</h1>
              </div>

              <div className=" w-[20%] h-[80%] flex justify-between">
                <div className=" w-[50%] h-full items-center justify-center flex flex-col border-r-2">
                  <h1 className=" text-3xl font-bold"> {students.length} </h1>
                  <p className=" text-sm  text-gray-500">Student</p>
                </div>
              </div>
            </div>

            <div className="w-[90%] h-[11%] flex items-center border-t-2 border-b-2">
              <h1 className=" w-[19%] h-[70%] items-center flex text-sm text-gray-600">
                Name
              </h1>
              <h1 className=" w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center">
                Attendant
              </h1>
              <h1 className=" w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center">
                class defence{" "}
              </h1>
              <h1 className=" w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center">
                Assignment
              </h1>
              <h1 className=" w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center">
                Total
              </h1>
            </div>

            {isLoading ? (
                <div className="w-full h-[500px] bg-slate-200 flex justify-center items-center">
                <BeatLoader color="#000" size={24} />
              </div>
            ):(

                <dv className="w-[90%] h-max flex flex-col gap-1 relative">
              {students.map((student, index) =>(
                <div
                  key={index}
                  className="w-full h-[40px] flex justify-between items-center"
                >
                  <div className="w-[25%] h-[70%] items-center flex  gap-2">
                    <div className="w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center">
                      <img
                        src={student.profileImage}
                        alt="Description"
                        className="w-full h-[20px]  object-contain"
                      />
                    </div>
                    <h1 className=" text-sm">
                      {student.firstName} {student.lastName}{" "}
                    </h1>
                  </div>

                  <div className="w-[18%] h-[70%] items-center flex ">
                    <h1
                      type="number"
                      className="w-[30px] h-[20px] border-2 flex items-center justify-center"
                    >
                      33
                    </h1>
                  </div>

                  <div className="w-[18%] h-[70%] items-center flex ">
                    <h1
                      type="number"
                      className="w-[30px] h-[20px] border-2 flex items-center justify-center"
                    >
                      35
                    </h1>
                  </div>

                  <div className="w-[18%] h-[70%] items-center flex ">
                    <h1
                      type="number"
                      className="w-[30px] h-[20px] border-2 flex items-center justify-center"
                    >
                      55
                    </h1>
                  </div>

                  <div className="w-[19%] h-[100%] items-center flex">
                    <button className="w-[50px] h-[36px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer">
                      50
                    </button>
                  </div>
                </div>
              ))}
            </dv>
            )}
            
            
          </div>
        </div>
      </div>
    </div>
  );
};
