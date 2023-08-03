import { _Navigation } from '../entities/navigation';

export const mapNavigationQueryToNavigationProps = (
  navigation: Queries.PrismicNavigation,
): _Navigation => {
  const isAnchorsEmpty = navigation?.data?.anchors?.every(
    (anchor) => anchor.label === undefined || anchor.path === undefined,
  );

  if (
    navigation?.data?.anchors?.length === 0 ||
    isAnchorsEmpty ||
    !navigation?.data?.button_label ||
    !navigation?.data?.button_path
  ) {
    throw new Error(`Missing navigation data`);
  }

  return {
    anchors: navigation?.data?.anchors?.map((anchor) => ({
      label: anchor?.label || ``,
      path: anchor?.path || ``,
    })),
    button: {
      label: navigation?.data?.button_label,
      path: navigation?.data?.button_path,
    },
  };
};
