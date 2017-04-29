import { Section, DataModelType, SectionType } from './data-interfaces';
import { QUESTION_MAP } from './data-map';
import { ABOUT_MENU, CA_TJ_MENU } from './menus';

export const DATA_MODEL: Section[] = [
  createDataModel('About'),
  createDataModel('What is ca-tj?'),
  createDataModel('Survivors'),
  createDataModel('Perpetrators'),
  createDataModel('Community'),
  createDataModel('Perpetrators/Principles'),
  createDataModel('Survivors/Principles'),
];

function createDataModel(name: SectionType, type?: DataModelType): Section {
  let dataModel = new Section();
  dataModel.navTitle = name;
  dataModel.type = type;
  dataModel.questions =  name === 'About' ? [] : QUESTION_MAP['What is ca-tj?'];

  switch(name) {
    case 'About':
      dataModel.menu = ABOUT_MENU;
          break;
    case 'What is ca-tj?':
      dataModel.menu = CA_TJ_MENU;
      break;
    default:
      dataModel.menu = [];

  }
  return dataModel;
}











