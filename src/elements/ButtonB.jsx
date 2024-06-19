import React from 'react'
import style from './ButtonB.module.css'


function ButtonB({text, link}) {
  return (
    <div className={style.btn}>
      <a href={link} target="_blank">
       <button>{text} </button></a>
    </div>
  )
}

export default ButtonB