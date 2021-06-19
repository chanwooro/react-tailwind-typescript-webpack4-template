export declare interface IMapStateToProps {
    counter: number
}

export declare interface IMapDispatchToProps {
    addValue: () => void
}

export declare interface IParentProps {
    nullableProp?: string
    parentString?: string
}

export type IHomeProps = IMapStateToProps & IMapDispatchToProps & IParentProps;