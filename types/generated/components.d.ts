import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsPageHeader extends Schema.Component {
  collectionName: 'components_components_page_headers';
  info: {
    displayName: 'Page Header';
  };
  attributes: {
    headingText: Attribute.String;
    highlightedText: Attribute.String;
    image: Attribute.Media<'images'>;
    content: Attribute.Blocks;
  };
}

export interface ComponentsNewsletterWidget extends Schema.Component {
  collectionName: 'components_components_newsletter_widgets';
  info: {
    displayName: 'Newsletter Widget';
  };
  attributes: {
    image: Attribute.Media<'images', true>;
    heading: Attribute.String;
    subheading: Attribute.String;
    inputPlaceholder: Attribute.String;
    buttonText: Attribute.String;
  };
}

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

export interface LayoutWorkExperience extends Schema.Component {
  collectionName: 'components_layout_work_experiences';
  info: {
    displayName: 'Work Experience';
  };
  attributes: {
    heading: Attribute.String;
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

export interface LayoutLetSConnect extends Schema.Component {
  collectionName: 'components_layout_let_s_connects';
  info: {
    displayName: "Let's Connect";
  };
  attributes: {
    content: Attribute.Blocks;
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

export interface LayoutContentSection extends Schema.Component {
  collectionName: 'components_layout_content_sections';
  info: {
    displayName: 'Content Section';
    description: '';
  };
  attributes: {
    widgetNewsletter: Attribute.Component<'components.newsletter-widget'>;
    postsHeading: Attribute.String;
    projectsHeading: Attribute.String;
    noFeaturedProjectsMessage: Attribute.Text;
  };
}

export interface LayoutAboutHeader extends Schema.Component {
  collectionName: 'components_layout_about_headers';
  info: {
    displayName: 'About Page Header';
    description: '';
  };
  attributes: {
    headingText: Attribute.String;
    highlightedText: Attribute.String;
    image: Attribute.Media<'images'>;
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.page-header': ComponentsPageHeader;
      'components.newsletter-widget': ComponentsNewsletterWidget;
      'components.menu-item': ComponentsMenuItem;
      'components.link': ComponentsLink;
      'layout.work-experience': LayoutWorkExperience;
      'layout.side-navigation': LayoutSideNavigation;
      'layout.let-s-connect': LayoutLetSConnect;
      'layout.hero-section': LayoutHeroSection;
      'layout.header': LayoutHeader;
      'layout.content-section': LayoutContentSection;
      'layout.about-header': LayoutAboutHeader;
    }
  }
}
