import React from 'react';
import ReactDOM from 'react-dom';
//стили
import useStyles from '../../styles';
//иконки
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';

//Компоненты
import {
  UserProfile,
  News,
  Messeger,
  Follows,
  NotificationPage,
  SearchPage,
  SettingPage,
} from '../index';

function NavigetionPanel() {
  const classes = useStyles();
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelectItem = (index: number) => {
    setActiveItem(index);

    switch (index) {
      case 0:
        ReactDOM.render(<UserProfile />, document.getElementById('workSpaceID'));
        break;
      case 1:
        ReactDOM.render(<News />, document.getElementById('workSpaceID'));
        break;
      case 2:
        ReactDOM.render(<Messeger />, document.getElementById('workSpaceID'));
        break;
      case 3:
        ReactDOM.render(<Follows />, document.getElementById('workSpaceID'));
        break;
      case 4:
        ReactDOM.render(<News />, document.getElementById('workSpaceID'));
        break;
      case 5:
        ReactDOM.render(<NotificationPage />, document.getElementById('workSpaceID'));
        break;
      case 6:
        ReactDOM.render(<SearchPage />, document.getElementById('workSpaceID'));
        break;
      case 7:
        ReactDOM.render(<SettingPage />, document.getElementById('workSpaceID'));
        break;
    }
  };

  const listIcons = [
    {
      icon: <PersonIcon style={{ fontSize: 30 }} />,
    },
    {
      icon: <AssignmentIcon style={{ fontSize: 30 }} />,
    },
    {
      icon: <MessageIcon style={{ fontSize: 30 }} />,
    },
    {
      icon: <PeopleIcon style={{ fontSize: 30 }} />,
    },
    {
      icon: <WebAssetIcon style={{ fontSize: 30 }} />,
    },
    {
      icon: <NotificationsIcon style={{ fontSize: 30 }} />,
    },
    {
      icon: <SearchIcon style={{ fontSize: 30 }} />,
    },
    {
      icon: <SettingsIcon style={{ fontSize: 30 }} />,
    },
  ];

  return (
    <nav className={classes.navStyle}>
      <ul className={classes.listNav}>
        {listIcons.map((obj, index) => (
          <li
            key={`${obj}_${index}`}
            className={activeItem === index ? classes.activeItem : classes.noAciveItem}
            onClick={() => onSelectItem(index)}
          >
            {obj.icon}
            {/* {obj.text} */}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigetionPanel;
