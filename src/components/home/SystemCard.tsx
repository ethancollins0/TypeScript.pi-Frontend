import React from "react";

const SystemCard = ({ pi }: any) => {
  const { id, name, description, model, user_id } = pi;

  return (
    <div className="system-card">
      <section>{name}</section>

      <button>{description}</button>
      <button>Model {model}</button>

      <h4>Uptime: 02:01 minutes</h4>
    </div>
  );
};

export default SystemCard;
