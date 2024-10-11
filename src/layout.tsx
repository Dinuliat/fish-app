import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="App" style={{ minHeight: "100vh" }}>
            {children}
        </div>
    )
}