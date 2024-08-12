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

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    name: Attribute.String;
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
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

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    headingText: Attribute.String;
    highlightedText: Attribute.String;
    subheadingText: Attribute.Text;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    link: Attribute.Component<'components.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.menu-item': ComponentsMenuItem;
      'components.link': ComponentsLink;
      'layout.side-navigation': LayoutSideNavigation;
      'layout.hero-section': LayoutHeroSection;
      'layout.header': LayoutHeader;
    }
  }
}
