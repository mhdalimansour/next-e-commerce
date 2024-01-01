import classes from './index.module.scss'

export default async function RecoverPassword() {
  return (
    <section className={classes.login}>
      <div className={classes.heroImg}>
        <Link href="/">
          <Image src="logo-black.svg" alt="logo" width={250} height={23} className={classes.logo} />
        </Link>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <RenderParams className={classes.params} />

          <div className={classes.formTitle}>
            <h3>Welcome</h3>
            <Image src="/assets/icons/hand.png" alt="hand" width={30} height={30} />
          </div>

          <p>Please login here</p>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}
