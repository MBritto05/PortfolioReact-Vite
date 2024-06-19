import style from "./TimeLineCard.module.css"

export default function TimeLineCard({ano, texto, lineLeft, ball,  lineRight}) {
  return (
    <div>
      <h3>{ano}</h3>

      <div className={style.time}>
        <div className={lineLeft ? style.line :  style.lineNone}></div>
        <div className={ball ? style.ball : style.ballNone}></div>
        <div className={lineRight ? style.line : style.lineNone}></div>
      </div>

      <p>{texto}</p>
    </div>
  )
}