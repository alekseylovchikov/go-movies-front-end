import { useEffect, useState } from 'react';

import { Title } from '../shared/ui/Title';
import { Table } from '../shared/ui/Table';

export const _links = [
  {
    id: 1,
    title: 'Hello',
    release_date: '1986-03-01',
    runtime: 116,
    mpaa_rating: 'R',
    description: 'Some long description',
  },
  {
    id: 2,
    title: 'World',
    release_date: '1996-03-01',
    runtime: 115,
    mpaa_rating: 'PG-13',
    description: 'Some long description',
  },
  {
    id: 112,
    title: 'Невролог - Лимассол',
    release_date: '2023-03-01',
    runtime: 115,
    mpaa_rating: 'PG-13',
    description: 'Тут могут быть контакты',
  },
];

const Links = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(_links);
  }, []);

  return (
    <div>
      <Title>Links</Title>
      <Table links={links} />
    </div>
  );
};
export default Links;
