import { ReactNode } from "react";
import { Bubbles } from "./components/bubbles";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="App" style={{ minHeight: "100vh", position: "relative" }}>
            <Bubbles />
            {children}
        </div>
    )
}