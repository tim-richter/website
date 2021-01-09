import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'react-feather';
import Card from './Card';

type Props = {
  title: string;
  children: React.ReactNode;
};

const StyledCard = styled(Card)`
  position: relative;
  font-size: 1.1rem;
  padding: 24px;
  border-radius: 4px;
  display: flex;
  height: 100%;
  width: 100%;
  margin: 8px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  white-space: pre-wrap;
  cursor: pointer;
  overflow: hidden;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Content = styled.div`
  margin-top: 24px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5rem;
`;

const DownArrow = styled(ChevronDown)`
  color: #bbbbbb;
  position: absolute;
  bottom: -12px;
  transform: translate(-50%, -50%);
`;

const DropdownCard = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledCard onClick={() => handleClick()}>
      <Title>{title}</Title>

      <AnimatePresence initial>
        {!isOpen && (
          <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <DownArrow />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0, 0.5, 0.7, 0.9] }}
          >
            <Content>{children}</Content>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledCard>
  );
};

export default DropdownCard;
