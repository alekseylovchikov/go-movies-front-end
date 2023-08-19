import { useRouteError } from 'react-router-dom';
import { Title } from '../shared/ui/Title';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <div>
        <div>
          <Title>Oh no!</Title>
          <p>
            <strong>{error.statusText || error.message}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
