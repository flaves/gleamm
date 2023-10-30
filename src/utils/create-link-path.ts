export const createLinkPath = (params: (string | undefined)[]) => {
  return params.reduce<string>(
    (acc, param) => acc + (param ? `/${param}` : ``),
    ``,
  );
};
