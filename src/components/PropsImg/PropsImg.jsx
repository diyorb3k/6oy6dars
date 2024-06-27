import React from 'react'
import"../PropsImg/PropsImg"

const PropsImg = ({files}) => {
  return (
    <div>
        {
                 Object.values(files)?.map((img,inx) =>(
                    <img className='imgg'  key={inx} src={URL.createObjectURL(img)}width={30} height={30}  alt="" />
                ))
        }
    </div>
  )
}

export default PropsImg