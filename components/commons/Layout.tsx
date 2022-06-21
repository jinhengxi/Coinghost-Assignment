import { ReactNode } from "react";

export  const Layout = ({children,}: {children: ReactNode;}): JSX.Element => {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
};
