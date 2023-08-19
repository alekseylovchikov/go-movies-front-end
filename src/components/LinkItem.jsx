import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Title } from '../shared/ui/Title';
import { _links } from './Links';

const LinkItem = () => {
  const [link, setLink] = useState({});
  const { id: idFromParam } = useParams();

  useEffect(() => {
    if (!idFromParam) return;

    const myLink = _links.find(({ id }) => id === Number(idFromParam));

    setLink(myLink);
  }, [idFromParam]);

  if (!link) return null;

  return (
    <div>
      <Title>{link.title}</Title>
      <small>Запись создана: {link.release_date}</small>
      <main>
        <h3>Контакты</h3>
        <p>{link.description}</p>
      </main>
    </div>
  );
};

export default LinkItem;
