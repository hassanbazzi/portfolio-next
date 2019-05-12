import styles from './style'

export default function({...props}) {
  return <button {...props}>{props.children}</button>;
}
