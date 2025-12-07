import { TrendingDown, TrendingUp } from "lucide-react";
import { formatToNaira } from "../../lib/util";

interface Prop {
    title: string;
    icon: React.ReactNode;
    iconColor: string;
    value: number;
    trend: 'up' | 'down';
    change: number;
}

const KPI = ({ title, icon, iconColor, value, trend, change }: Prop) => {
    return (
        <div className="kpi-card">
            <div className="kpi-card__header flex">
                <h4>{title}</h4>
                <span aria-hidden className={`${iconColor}`}>{icon}</span>
            </div>

            <div className="kpi-card__body flex">
                <h3>{formatToNaira(value)}</h3>
                <span className="flex">
                    {
                        trend === "up" ?
                        <TrendingUp style={{color: "green"}} aria-hidden />
                        :
                        <TrendingDown style={{color: "red"}} aria-hidden />
                    }
                    {change}%
                </span>
            </div>
        </div>
    )
}
export default KPI