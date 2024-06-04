import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="App vh-100">
            {children}
        </div>
    )
}