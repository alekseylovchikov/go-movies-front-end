import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <div>
        <div>
          <h1>Oh no!</h1>
          <p>
            <strong>{error.statusText || error.message}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
