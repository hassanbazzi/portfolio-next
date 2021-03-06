import style from "./style.scss";
export default ({ label, name, type = "text", ...props }) => (
  <div class={style.container}>
    <label for={name}>{label}</label>
    <input id={name} required type={type} name={name} {...props} />
  </div>
);
