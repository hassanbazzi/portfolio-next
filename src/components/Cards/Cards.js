import style from "./style";

export default ({ items }) => (
  <div class={style.container}>
    {items.map(({ name, logo, summary, position }) => (
      <div class={style.item}>
        <h2>{name}</h2>
        <h3>{position}</h3>
        <p>{summary}</p>
      </div>
    ))}
  </div>
);
