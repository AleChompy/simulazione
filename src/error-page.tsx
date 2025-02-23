import * as React from "react";
import { useRouteError } from "react-router-dom";

interface ErrorPageProps {
}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  const error: any | undefined = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
