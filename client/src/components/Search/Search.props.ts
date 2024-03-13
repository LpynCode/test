import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}