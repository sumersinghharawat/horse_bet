import React, { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Sidebar } from './Sidebar';
import { Context } from "../../App";

export default function Settings(props){

    const {
    indiaRace,
    setIndiaRace,
    betData,
    setBetData,
    setRaceIndexNum,
    setAmountData,
    convertHour,
    } = useContext(Context);
    const [allCountry, setAllCountry] = useState([]);
    
    useEffect(() => {
        db.collection("participant")
          .doc("T0xHihFaGFfgLyByPzMcyvHm8du1")
          .onSnapshot((snapshot) => {
            setBetData(snapshot.data()?.data);
          });
      }, [allCountry]);

    useEffect(() => {
        db.collection("users")
          .doc("T0xHihFaGFfgLyByPzMcyvHm8du1")
          .onSnapshot((snapshot) => {
              setAdminBWPData(snapshot.data()?.sc);
          });
      }, []);

    
    const [adminBWPData, setAdminBWPData] = useState(0);

    return (
        <>
            <div>
                <Sidebar />
                <div className="user-data-tabel">
                  <p
                    style={{
                      margin: "15px 15px 5px 15px",
                      padding: "10px 10px 0px 10px",
                      fontSize: "20px",
                      color: "black",
                      fontWeight: "600",
                      textAlign: "center"
                    }}
                  >
                    Settings
                  </p>
        
                  <p style={{ margin: "0px" }}>
                    BWP Daily Service Charge : {adminBWPData}
                  </p>
                </div>
                <div className="user-data-tabel">
                  <p
                    style={{
                      margin: "15px 15px 5px 15px",
                      padding: "10px 10px 0px 10px",
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    Settings
                  </p>
                </div>
            </div>
        </>
    );
};