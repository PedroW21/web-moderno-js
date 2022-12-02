import React from "react";

export function childrenWithProps(props)
{
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props 
            // o segundo paramentro aqui eu sobrescrevo as propriedades do pai
        })
    })
}
