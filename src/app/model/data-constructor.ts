import { Section, DataModelType, SectionType } from './data-interfaces';
import { HEADER_MAP, QUESTION_MAP } from './data-map';

export const DATA_MODEL: Section[] = [
  createDataModel('About'),
  createDataModel('What is ca-tj?', 'PRAXIS'),
  createDataModel('Survivors', 'PRAXIS'),
  createDataModel('Perpetrators', 'PRAXIS'),
  createDataModel('Community', 'PRAXIS'),
  createDataModel('Perpetrators/Principles', 'PRINCIPLE'),
  createDataModel('Survivors/Principles', 'PRINCIPLE'),
];

function createDataModel(name: SectionType, type?: DataModelType): Section {
  let dataModel = new Section();
  dataModel.navTitle = name;
  dataModel.type = type;
  dataModel.header = HEADER_MAP[name + ':' + type];
  dataModel.questions = QUESTION_MAP['What is ca-tj?:PRAXIS'];
  return dataModel;
}








