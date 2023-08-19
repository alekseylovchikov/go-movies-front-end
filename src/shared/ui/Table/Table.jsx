import {Link} from "react-router-dom";

export const Table = ({ links }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Created at</th>
                <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            {links.map(link => (
                <tr key={link.id}>
                    <td>
                        <Link to={`/links/${link.id}`}>
                            {link.title}
                        </Link>
                    </td>
                    <td>{link.release_date}</td>
                    <td>{link.mpaa_rating}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};