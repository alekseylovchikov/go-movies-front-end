import {useMatches} from "react-router-dom";

export function Breadcrumbs() {
    let matches = useMatches();
    let crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => match.handle.crumb(match.data));

    return (
        <>
            <ul className="breadcrumbs mt-1">
                {crumbs.map((crumb, index) => (
                    <li key={index}>{crumb}</li>
                ))}
            </ul>
        </>
    );
}