import { ComponentProps, ComponentPropsWithRef, ComponentPropsWithoutRef, FC, ReactNode } from "react"

type HintBoxProps = {
    mode: 'hint'
    children: ReactNode
}

type WarningBoxProps = {
    mode: 'warning',
    severity: 'low' | 'medium' | 'high'
    children: ReactNode

} 

type InfoBoxProps = HintBoxProps | WarningBoxProps & ComponentPropsWithoutRef<'button'>;

const InfoBox =(passedprops:InfoBoxProps) => {
    const { children, mode,...props } = passedprops;
    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p >{children}</p>
                <button {...props}>hhh</button>
            </aside>
        )
    }

    const { severity } = passedprops;
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>warning</h2>
            <button {...props}>hhh</button>
            <p>{children}</p>
        </aside>
    )
}


export default InfoBox;