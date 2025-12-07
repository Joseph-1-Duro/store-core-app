import { BoxIcon } from "lucide-react"
import KPI from "../components/cards/KPI"

const Overview = () => {
  return (
    <section className="overview">
      <header className="overview__header">
        <h1>Overview</h1>
        <p>Hi <span className="user">Duro</span>! Here is what is happening with business today</p>
      </header>

      <div className="overview__metrics grid">
        <KPI
          title="Total Revenue"
          icon={<BoxIcon />}
          iconColor="blue"
          change={45}
          trend="up"
          value={1240000}
        />
        <KPI
          title="Total Revenue"
          icon={<BoxIcon />}
          iconColor="blue"
          change={45}
          trend="up"
          value={1240000}
        />
        <KPI
          title="Total Revenue"
          icon={<BoxIcon />}
          iconColor="blue"
          change={45}
          trend="up"
          value={1240000}
        />
        <KPI
          title="Total Revenue"
          icon={<BoxIcon />}
          iconColor="blue"
          change={45}
          trend="up"
          value={1240000}
        />
      </div>
    </section>
  )
}
export default Overview