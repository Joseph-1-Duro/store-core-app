import { BadgeDollarSign, ChartLine, FileQuestionMark, LayoutDashboard, Settings, StoreIcon } from "lucide-react"
import { NavLink } from "react-router";
import Logo from "./Logo";

interface NavItem {
    path: string;
    icon: React.ReactNode;
    label: string
}

const Sidebar = () => {
    const navItems: NavItem[] = [
        { path: '/', icon: <LayoutDashboard />, label: "Dashboard" },
        { path: "/inventory", icon: <StoreIcon />, label: "Inventory" },
        { path: "/sales", icon: <BadgeDollarSign />, label: "Sales" },
        { path: "/report", icon: <ChartLine />, label: "Report" }
    ];

    const extraNavItems: NavItem[] = [
        { path: '/help-center', icon: <FileQuestionMark />, label: "Help Center"},
        { path: '/settings', icon: <Settings />, label: "Setting" }
    ];

    return (
        <aside className="sidebar flex">
            <div className="sidebar__header flex">
                <Logo />
                <span className="t-uppercase">StoreCore</span>
            </div>

            <nav className="sidebar__nav" aria-label="Main Navigation">
                <ul role="menubar">
                    {
                        navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink to={item.path} aria-label={item.label}>
                                    <span className="icon" aria-hidden>{item.icon}</span>
                                    <span className="label">{item.label}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <div className="sidebar__footer" aria-label="Secondary Navigation">
                <ul>
                    {
                        extraNavItems.map((item) => (
                            <li key={item.path}>
                                <NavLink to={item.path} aria-label={item.label}>
                                    <span aria-hidden>{item.icon}</span>
                                    <span className="label">{item.label}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </aside>
    )
}
export default Sidebar