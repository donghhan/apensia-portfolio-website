import style from "./Loader.module.scss";

export default function Loader(): JSX.Element {
  const box = ["first", "second", "third", "fourth", "fifth", "sixth"];

  return (
    <aside className={style.loader_container}>
      <div className={style.loader_wrapper}>
        {box.map((i) => (
          <div key={i} id={style[i]} className={style.box} />
        ))}
      </div>
    </aside>
  );
}
