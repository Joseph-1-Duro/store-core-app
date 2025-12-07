// make a public layout that signs user in immediately a user has been detected
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import GoogleButton from "../components/Buttons/GoogleButton"
import { useRef } from "react"
import Logo from "../components/Logo"

const Login = () => {
  const containerRef = useRef<HTMLElement | null>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
      }
    })

    tl.from(".hero__heading", {
      opacity: 0,
      y: 40
    }, "-=0.5")
      .from(".hero__sub-heading", {
        opacity: 0,
        y: 30
      })
      .from(".sign-in-detail", {
        opacity: 0,
        x: 40
      })
      .from("button", {
        opacity: 0,
        x: 30,
      })

  }, { scope: containerRef })

  return (
    <main className="login-page" ref={containerRef}>
      <section className="hero">
        <div className="header">
          <h1 className="hero__heading">Manage your inventory and track sales.</h1>
          <p className="hero__sub-heading">
            Realtime stats update, Stock on Hand, offline features, smart dashboard, AI suggestions, and more.
          </p>
        </div>

        <p className="sign-in-detail">We'll sign you in, or create a new account for you</p>
        <GoogleButton />
      </section>

      <h4 className="app-name t-uppercase flex"> <Logo /> StoreCore</h4>
    </main>
  )
}
export default Login