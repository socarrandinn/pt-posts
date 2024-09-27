import {ReactNode} from 'react';

export type ChildrenProps = {
    children?: ReactNode | undefined
}

export type ResultProps = {
    image?: string
    title?: string
    subtext?: string
    suggest?: string
    suggest1?: string
    suggest2?: string
    imageHeight?: number
    imageWidth?: number
}

export type TableResultProps = {
    errorResultCmp?: any,
    emptyResultCmp?: any,
    errorResultProps?: ResultProps,
    emptyResultProps?: ResultProps
}