import React, { Component } from 'react'
import './Tudulist'
import  {ToastContainer,toast} from "react-toastify"
import './Tudulist.css'

 class Notificiatrion extends Component {
    notify=()=>{toast('🦄 Mufaqiyatli ruyhatdan utdingiz', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  render() {
    return (
          
        < button   onClick = {this.notify}>Salom</button > 
      
    )
  }
}

export default Notificiatrion