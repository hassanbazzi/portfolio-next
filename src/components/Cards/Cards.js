import style from "./style";

export default ({ items }) => (
  <div class={style.container}>
    {items.map(({ name, logo, summary, position }) => (
      <div class={style.item}>
        <h2>{name}</h2>
        <h3>{position}</h3>
        {summary === "social" ? (
          <ul>
            <li>
              <a rel="noopener" href="https://linkedin.com/in/habazzi">
                LinkedIn: habazzi
              </a>
            </li>
            <li>
              <a rel="noopener" href="https://twitter.com/habazzi">
                Twitter: habazzi
              </a>
            </li>
            <li>
              <a rel="noopener" href="https://github.com/hassanbazzi">
                Github: hassanbazzi
              </a>
            </li>
            <li>
              <a rel="noopener" href="https://medium.com/habazzi">
                Medium: habazzi
              </a>
            </li>
          </ul>
        ) : (
          <p>{summary}</p>
        )}
      </div>
    ))}
  </div>
);
