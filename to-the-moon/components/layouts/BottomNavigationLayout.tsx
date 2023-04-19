import React, { useState, useRef, useEffect } from 'react';
import BottomNavigation from '../BottomNavigation';
import FloatingChatButton from '../FloatingChatButton';
import ChatGptComponent from '../ChatGptComponent';
import { truncate } from 'fs';

type Props = {
  children: React.ReactNode;
  currentPage: string;
};

const Layout: React.FC<Props> = ({ children, currentPage }:Props) => {
  const [showChatBox, setShowChatBox] = useState(false);
  const chatBoxRef:any = useRef();
  

  const handleChatButtonClick = (event:React.MouseEvent) => {
    event.stopPropagation();
    console.log('handleChatButtonClick - chat should be open')
    setShowChatBox(true);
  };

  const handleDocumentClick = (event:any) => {
    console.log('document click')
    if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)&&showChatBox==true) {
      console.log('chat should be close')
      setShowChatBox(false);
    }

  };

  useEffect(() => {
    if (showChatBox) {
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.removeEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showChatBox]);


  return (
    <>
      <div>{children}</div>
      <BottomNavigation currentPage={currentPage} />
      <FloatingChatButton onToggleChat={handleChatButtonClick} />
  
        <div
          ref={chatBoxRef}
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: 'white',
            borderRadius: 8,
            width: 300,
            height: 400,
            border: '1px solid #ccc',
            overflow: 'hidden',
            display: showChatBox ? 'block' : 'none',
          }}
        >
          <ChatGptComponent/>
        </div>
    </>
  );
};

export default Layout;
