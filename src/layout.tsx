import { ReactNode } from "react";
import { Bubbles } from "./components/bubbles";
import { Header } from "./components/header";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="App" style={{ minHeight: "100vh", position: "relative" }}>
            <Header />
            <Bubbles />
            <div>
                {children}
            </div>
        </div>
    )
}