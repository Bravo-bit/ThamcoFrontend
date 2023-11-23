import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import styles from "../pages/styles/Home.module.css"

function HomePage() {

  const form = <Card>
    <form>
      <h1 className={styles.header}>Log In</h1>
      <input className={styles.input} id="email" placeholder="Email" type="email"></input>
      <input className={styles.input} id="password" type="password" placeholder="Password"></input>

      <Button>Log In</Button>
      <Button>Sign Up</Button>
    </form>
  </Card>

  return <>{form}</>;
}

export default HomePage;
