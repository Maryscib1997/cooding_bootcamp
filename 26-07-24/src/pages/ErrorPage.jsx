<<<<<<< HEAD
import ErrorComponent from "../components/ErrorComponent";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { labels } from "../data/labels";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <ErrorComponent message={error.statusText || error.message}>
        <Link className="bg-green-300" to="/">
        {labels.goBackHome}
        </Link>
      </ErrorComponent>
    </div>
  );
}

=======
import ErrorComponent from "../components/ErrorComponent";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { labels } from "../data/labels";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <ErrorComponent message={error.statusText || error.message}>
        <Link className="bg-green-300" to="/">
        {labels.goBackHome}
        </Link>
      </ErrorComponent>
    </div>
  );
}

>>>>>>> f5516dda867c56536613e003d050e9e758f98dfc
export default ErrorPage;