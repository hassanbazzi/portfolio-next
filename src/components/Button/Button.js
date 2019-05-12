import styles from './style'

export default function({...props}) {
  return <button type="submit" {...props}>{props.children}</button>;
}
