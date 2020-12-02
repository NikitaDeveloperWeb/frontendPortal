import { Typography } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { SkillsMe, ContactsMe, PortfolioMe } from '..';
import useStyles from '../../styles';

interface AboutMeProps {
  mail: string;
  number: string;
  webSite: string;
  stack: string;
  aboutMySelf: string;
}

const listCategories = ['Scills', 'Contacts', 'Portfolio'];
function AboutMe({ mail, number, webSite, stack, aboutMySelf }: AboutMeProps) {
  const classes = useStyles();

  const [activeCategoties, setActiveCategories] = React.useState(1);

  const onSelectCategories = (index: number) => {
    setActiveCategories(index);
    switch (index) {
      case 0:
        ReactDOM.render(
          <SkillsMe stackSkills={stack} mySelf={aboutMySelf} />,
          document.getElementById('information'),
        );
        break;
      case 1:
        ReactDOM.render(
          <ContactsMe mailCont={mail} numberCont={number} webSiteCont={webSite} />,
          document.getElementById('information'),
        );
        break;
      case 2:
        ReactDOM.render(<PortfolioMe />, document.getElementById('information'));
        break;
    }
  };

  return (
    <div className={classes.wrapperAboutMe}>
      <Typography variant="h6" style={{ textAlign: 'center', fontSize: 20, color: '#3D3E3F' }}>
        About me
      </Typography>
      <ul className={classes.categoriesInfo}>
        {listCategories.map((obj, index) => (
          <li
            key={`${obj}_${index}`}
            className={activeCategoties === index ? classes.activeItem : classes.noAciveItem}
            onClick={() => onSelectCategories(index)}
          >
            <Typography variant="h6" style={{ fontSize: 15 }}>
              {obj}
            </Typography>
          </li>
        ))}
      </ul>
      <section id="information" className="sectionInformation">
        <ContactsMe mailCont={mail} numberCont={number} webSiteCont={webSite} />
      </section>
    </div>
  );
}

export default AboutMe;
