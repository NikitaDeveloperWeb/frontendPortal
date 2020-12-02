import { Typography } from '@material-ui/core';
import React from 'react';
import { HeaderHome } from '..';

interface messegerProps {
  transmitter: string;
  receiver: string;
  messegePost: string;
  messegeGet: string;
  datePost: string;
  dateGet: string;
}

const messageArray = [
  {
    transmitter: 'Carl Volt',
    receiver: 'Alice Cyberg',
    messagePost: 'Hello!',
    messageGet: 'Hello!',
    datePost: '3.11.2020 12:11',
    dateGet: '3.11.2020 12:00',
  },
];

const listDialogs = [
  {
    transmitter: 'Carl Volt',
    lastMessage: 'How are you?',
    avatar: '',
    online: true,
  },
];

// {
//   transmitter,
//   receiver,
//   messegePost,
//   messegeGet,
//   datePost,
//   dateGet,
// }: messegerProps

function Messeger() {
  return (
    <div className="messegerWrapper">
      <HeaderHome title="messeger" />
      <section className="messageWorkspace">
        <aside>
          <Typography
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#EBEBEB',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#000',
              fontSize: 30,
              borderBottom: '0.7px solid rgba(0,0,0,0.4)',
            }}
          >
            Chats
          </Typography>
          <div className="listChats">
            <div className="chats">
              <div className="lastmesss">
                <div className="avatar_mess"></div>
                <div className="intro_mess">
                  <p>How are you worning?</p>
                  <div className="date">14:12</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="messager">
          <div className="storyMessage">
            <div className="chatInfo">Lexus Drear</div>
          </div>
          <form action=""></form>
        </div>
      </section>
    </div>
  );
}

export default Messeger;
