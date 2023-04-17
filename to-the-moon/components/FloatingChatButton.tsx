import React from 'react';
import styles from './FloatingChatButton.module.css';

const FloatingChatButton = ({ onClick }: any) => {
  return (
    <button className={styles.chatButton} onClick={onClick}>
      Chat
    </button>
  );
};

export default FloatingChatButton;