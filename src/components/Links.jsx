import { useEffect, useState } from 'react';

import { Title } from '../shared/ui/Title';
import { Table } from '../shared/ui/Table';

export const _links = [
  {
    id: 1,
    title: 'Gym',
    description: 'Some long description',
    phone: '8 999 123 12 12',
    email: 'test@mail.com',
    category: 'sport',
    links: 'https://gym.com',
    added_at: '2023-03-01',
  },
  {
    id: 2,
    title: 'Bean bar',
    description: 'Some long description',
    phone: '8 999 123 12 12',
    email: 'test@mail.com',
    category: 'coffee',
    links: 'https://google.com',
    added_at: '2021-10-12',
  },
  {
    id: 112,
    title: 'Невролог - Лимассол',
    description: 'Тут могут быть контакты',
    phone: '8 999 123 12 12',
    email: 'test@mail.com',
    category: 'doctor',
    links: 'https://google.com',
    added_at: '2023-03-01',
  },
  {
    id: 412312,
    title: 'Невролог - Лимассол',
    description: 'Тут могут быть контакты',
    phone: '8 999 123 12 12',
    email: 'test@mail.com',
    category: 'doctor',
    links: 'https://google.com',
    added_at: '2023-03-01',
  },
  {
    id: 412121,
    title: 'Невролог - Лимассол',
    description: 'Тут могут быть контакты',
    phone: '8 999 123 12 12',
    email: 'test@mail.com',
    category: 'doctor',
    links: 'https://google.com',
    added_at: '2023-03-01',
  },
  {
    id: 11221,
    title: 'Невролог - Лимассол',
    description: 'Тут могут быть контакты',
    phone: '8 999 123 12 12',
    email: 'test@mail.com',
    category: 'doctor',
    links: 'https://google.com',
    added_at: '2023-03-01',
  },
];

const temp = (
  <>
    <h1 className="mb-1" style={{ color: 'tomato' }}>
      *** <u>HERE WILL BE A SEARCH</u> ***
    </h1>
    <h1 className="mb-1" style={{ color: 'tomato' }}>
      *** <u>HERE WILL BE A BADGE WITH CATEGORIES</u> ***
    </h1>
  </>
);

const Links = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const reqOptions = {
      method: 'GET',
      headers,
    };

    fetch(`http://localhost:8080/links`, reqOptions)
      .then((res) => res.json())
      .then((data) => {
        setLinks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Title>Links</Title>

      {temp}

      <Table links={links} />
    </div>
  );
};
export default Links;
