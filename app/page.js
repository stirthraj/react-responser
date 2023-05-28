"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useDispatch } from "react-redux";
import { setNotification } from "@/redux/slices/notification";
import { Button } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <main className={styles.main}>




 
   <div>   
   <Button variant="contained" onClick={(e)=>{
              dispatch(
          setNotification({
            open: true,
            message: "Write your message..",
            // vertical options: top,bottom,center
            vertical:"center",
            // horizontal options: left, right ,center
            horizontal:"center",
            autoHideDuration: 2000,
            severity: "success",
          })
        );
    }}>React Responser</Button></div>



    </main>
  )
}