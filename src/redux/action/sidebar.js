import { CLOSE_SIDEBAR, SHOW_SIDEBAR } from '../types';

export const showSidebar = () => {
  return { type: SHOW_SIDEBAR };
};

export const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR,
  };
};
