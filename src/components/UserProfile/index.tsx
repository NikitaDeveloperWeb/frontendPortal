import React from 'react';
import useStyles from '../../styles';
import { AboutMe, HeaderHome, ProfileIntro } from '../';
import avatarUser from '../../assets/images/ProfileAvatar.jpg';

const AboutMySelf =
  'Следует  отметить, что базовый вектор развития прекрасно подходит для реализации существующих финансовых и административных условий! Являясь всего лишь частью общей картины, представители современных социальных резервов являются только методом политического участия и своевременно верифицированы. Безусловно, выбранный нами инновационный путь позволяет выполнить важные задания по разработке как самодостаточных, так и внешне зависимых концептуальных решений. Предварительные выводы неутешительны: семантический разбор внешних противодействий однозначно определяет каждого участника как способного принимать собственные решения касаемо кластеризации усилий! ';

function UserProfile() {
  const classes = useStyles();
  return (
    <main className={classes.wrapperMain}>
      <HeaderHome title="profile" />
      <ProfileIntro
        avatar={avatarUser}
        firstName="Alice"
        lastName="Cyberg"
        status="Life is a labyrinth of difficulties."
        date="20.02.1999"
      />
      <AboutMe
        mail="alicacyberg@mail.ru"
        number="+7 922 965 9292"
        webSite="www.alice.com"
        stack=" HTML/CSS/JS/React/Vue/Python/Django/Rest/Express/MongoDB"
        aboutMySelf={AboutMySelf}
      />
    </main>
  );
}

export default UserProfile;
