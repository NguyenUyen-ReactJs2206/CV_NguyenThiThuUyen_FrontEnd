import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import NAVBAR_EN from 'src/locales/en/navbar.json'
import NAVBAR_VI from 'src/locales/vi/navbar.json'
import HOME_EN from 'src/locales/en/home.json'
import HOME_VI from 'src/locales/vi/home.json'
import ABOUT_EN from 'src/locales/en/about.json'
import ABOUT_VI from 'src/locales/vi/about.json'
import EDUCATION_EN from 'src/locales/en/education.json'
import EDUCATION_VI from 'src/locales/vi/education.json'
import SKILL_EN from 'src/locales/en/skill.json'
import SKILL_VI from 'src/locales/vi/skill.json'
import ABILITYTOWORK_EN from 'src/locales/en/abilitytowork.json'
import ABILITYTOWORK_VI from 'src/locales/vi/abilitytowork.json'

import MYPROJECTS_EN from 'src/locales/en/myproject.json'
import MYPROJECTS_VI from 'src/locales/vi/myproject.json'
import CONTACT_EN from 'src/locales/en/contact.json'
import CONTACT_VI from 'src/locales/vi/contact.json'

export const locales = {
  vi: 'VI',
  en: 'EN'
}
export const resources = {
  vi: {
    navbar: NAVBAR_VI,
    home: HOME_VI,
    about: ABOUT_VI,
    education: EDUCATION_VI,
    skill: SKILL_VI,
    abilitytowork: ABILITYTOWORK_VI,
    contact: CONTACT_VI,
    myprojects: MYPROJECTS_VI
  },
  en: {
    navbar: NAVBAR_EN,
    home: HOME_EN,
    about: ABOUT_EN,
    education: EDUCATION_EN,
    skill: SKILL_EN,
    abilitytowork: ABILITYTOWORK_EN,
    contact: CONTACT_EN,
    myprojects: MYPROJECTS_EN
  }
}
//Vi du chung ta ko truyen namespace vao thi no se lay ns default
export const defaultNS = 'contact'

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  ns: ['navbar', 'home', 'contact', 'about', 'education', 'skill', 'abilitytowork', 'myprojects'],
  defaultNS,
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false
  }
})
