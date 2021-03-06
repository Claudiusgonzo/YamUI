/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps, FocusableComponentProps } from '../../util/BaseComponent/props';
import './NavigationLink.css';

export interface NavigationLinkProps extends NestableBaseComponentProps, FocusableComponentProps {
  /**
   * Whether the clickable should be `display: block`.
   */
  block?: boolean;

  /**
   * URL or a URL fragment that the link points to.
   */
  href: string;

  /**
   * Whether the link should open in a new window. It securely removes access to the opening window.
   */
  newWindow?: boolean;

  /**
   * If present, indicates the link refers to the current page. This is usually used in cases where the link
   * is visually styled to indicate it is selected or is the current page, such as in a navigation list.
   */
  ariaCurrent?: 'page';

  /**
   * Title or description of the linked document for screenreaders.
   */
  ariaLabel?: string;

  /**
   * Title or description of the linked document for the anchor tag. You should generally avoid using this.
   */
  title?: string;

  /**
   * Whether to remove all styles from the link. Useful for allowing a large area to be clickable
   * while nesting `FakeLink` components to show link and hover state visuals.
   */
  unstyled?: boolean;
}

/**
 * A `NavigationLink` renders an `a` tag for navigation between web pages.
 */
export default class NavigationLink extends React.Component<NavigationLinkProps> {
  private anchorRef = React.createRef<HTMLAnchorElement>();

  public constructor(props: NavigationLinkProps) {
    super(props);
    if (this.props.focusableRef) {
      this.props.focusableRef(this);
    }
  }

  public render() {
    const { ariaCurrent, ariaLabel, href, newWindow, title, children } = this.props;
    const target = newWindow ? '_blank' : undefined;
    const rel = newWindow ? 'nofollow noopener noreferrer' : undefined;

    return (
      <a
        className={this.getClasses()}
        href={href}
        rel={rel}
        target={target}
        title={title}
        aria-label={ariaLabel}
        aria-current={ariaCurrent}
        ref={this.anchorRef}
      >
        {children}
      </a>
    );
  }

  public focus() {
    const anchor = this.anchorRef.current;
    if (anchor) {
      anchor.focus();
    }
  }

  private getClasses() {
    const { className, block, unstyled } = this.props;

    const classes: string[] = ['y-navigationLink'];
    if (unstyled) {
      classes.push('y-navigationLink__unstyled');
    }

    if (block) {
      classes.push('y-navigationLink__block');
    }

    if (className) {
      classes.push(className);
    }

    return join(classes);
  }
}
