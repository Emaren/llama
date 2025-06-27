import React from "react";

interface Route {
  id: string;
  name: string;
  active: boolean;
}

interface Props {
  routes: Route[];
  onActivate: (id: string) => void;
}

const QueryRouter: React.FC<Props> = ({ routes, onActivate }) => {
  return (
    <div>
      <h4>Query Router</h4>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            {route.name}{" "}
            <button onClick={() => onActivate(route.id)}>
              {route.active ? "Deactivate" : "Activate"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryRouter;
