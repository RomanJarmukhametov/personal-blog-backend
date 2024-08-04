import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsMenuItem extends Schema.Component {
  collectionName: 'components_components_menu_items';
  info: {
    displayName: 'Menu Item';
  };
  attributes: {
    href: Attribute.String;
    icon: Attribute.String;
    text: Attribute.String;
  };
}

export interface LayoutSideNavigation extends Schema.Component {
  collectionName: 'components_layout_side_navigations';
  info: {
    displayName: 'Side Navigation';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    menuItem: Attribute.Component<'components.menu-item', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.menu-item': ComponentsMenuItem;
      'layout.side-navigation': LayoutSideNavigation;
    }
  }
}
