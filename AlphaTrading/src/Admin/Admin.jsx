import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { StudentBar } from "./Student";
import { StudentComp } from "./StudentComp";
import { RecordComp } from "./RecordComp";
import { PaymentComp } from "./PaymentComp";
import { NotificationComp } from "./Notification";

export const AdminDashboard = () => {
  const [student, setStudent] = useState(true);
  const [studentComp, setStudentComp] = useState(false);
  const [recordComp, setRecordComp] = useState(false);
  const [paymentComp, setPaymentComp] = useState(false);
  const [notificationComp, setNotificationComp] = useState(false);

  const handleDash = () => {
    setStudent(true);
    setStudentComp(false);
    setRecordComp(false);
    setPaymentComp(false);
    setNotificationComp(false);
  };

  const handleStudent = () => {
    setStudent(false);
    setStudentComp(true);
    setRecordComp(false);
    setPaymentComp(false);
    setNotificationComp(false);
  };

  const handleRecord = () => {
    setStudent(false);
    setStudentComp(false);
    setRecordComp(true);
    setPaymentComp(false);
    setNotificationComp(false);
  };

  const handlePayment = () => {
    setStudent(false);
    setStudentComp(false);
    setRecordComp(false);
    setPaymentComp(true);
    setNotificationComp(false);
  };

  const handleNotification = () => {
    setStudent(false);
    setStudentComp(false);
    setRecordComp(false);
    setPaymentComp(false);
    setNotificationComp(true);
  };

  return (
    <div className="w-full h-max flex justify-center items-center bg-slate-200">
      <div className="w-[90%] h-[100vh] flex gap-7 pt-2">
        <SideBar handleDash={handleDash} handleStudent={handleStudent} handleRecord={handleRecord} handlePayment={handlePayment} handleNotification={handleNotification} student={student} studentComp={studentComp} recordComp={recordComp} notificationComp={notificationComp} paymentComp={paymentComp}/>
        {student ? (
          <StudentBar />
        ) : studentComp ? (
          <StudentComp />
        ) : recordComp ? (
          <RecordComp />
        ) : paymentComp ? (
          <PaymentComp />
        ) : notificationComp ? (
          <NotificationComp />
        ) : null}
      </div>
    </div>
  );
};
