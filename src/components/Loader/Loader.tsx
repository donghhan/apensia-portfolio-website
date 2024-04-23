import style from "./Loader.module.scss";

export default function Loader() {
  return (
    <aside className={style.loader_container}>
      <div className={style.loader_wrapper}>
        <div id={style.first} className={style.box}></div>
        <div id={style.second} className={style.box}></div>
        <div id={style.third} className={style.box}></div>
        <div id={style.fourth} className={style.box}></div>
        <div id={style.fifth} className={style.box}></div>
        <div id={style.sixth} className={style.box}></div>
      </div>
    </aside>
  );
}
