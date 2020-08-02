import React from 'react';

import './styles.scss';

interface FieldProps {
  id: string;
  label: string;
  onChange: (value: string) => void;
}

export const Field = (props: FieldProps) => {
  const { id, label, onChange } = props;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={id}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};
