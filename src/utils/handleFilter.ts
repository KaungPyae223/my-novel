import { useAddParams } from "./searchParams";

export const useHandleFilter = () => {
  
  const addParams = useAddParams();

  const changeFilter = (key: string, value: string) => {
    addParams([{ key: key, value: value }]);
  };

  return {
    changeFilter,
  };
};
