import { IApi } from '@umijs/max';

export default (api: IApi) => {
  api.modifyConfig((memo, { paths }) => {
    console.log(memo);
    console.log("paths", paths);
    return memo;
  });
};
