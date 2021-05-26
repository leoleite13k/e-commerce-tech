/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useRef, useEffect, HTMLAttributes } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Container, Button, Item } from './styles';

export interface IDropDown extends HTMLAttributes<HTMLDivElement> {
  options: string[];
  value: string;
  handleChange(valeu: string): void;
  widthComponent?: string;
}

const DropDown: React.FC<IDropDown> = ({
  options,
  value,
  handleChange,
  widthComponent = '200px',
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return (
    <Container
      ref={wrapperRef}
      isOpen={isOpen}
      widthComponent={widthComponent}
      {...rest}
    >
      <Button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        widthComponent={widthComponent}
      >
        <span>{value}</span>
        <MdKeyboardArrowDown size={20} color="#eee" />
      </Button>

      <ul>
        {options.map(option => (
          <Item key={option} isSelected={option === value}>
            <button
              type="button"
              onClick={() => {
                handleChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

export default DropDown;
