import React from 'react';

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  onChange: (e: string) => void;
  defaultValue: string;
};

export function Select(props: Props) {
  const { options, onChange, defaultValue } = props;
  return (
    <div className="flex gap-2 items-center">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={defaultValue}
        className="bg-white rounded-md p-1 min-w-[60px] border-[1px] border-gray-200"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
