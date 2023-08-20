import { Link } from 'react-router-dom';

export const Table = ({ links }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Category</th>
          <th>Links</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        {links.map((link) => (
          <tr key={link.id}>
            <td>
              <Link to={`/links/${link.id}`}>{link.title}</Link>
            </td>
            <td>{link.description}</td>
            <td>{link.phone}</td>
            <td>{link.email}</td>
            <td>{link.category}</td>
            <td>{link.links}</td>
            <td>{link.added_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
