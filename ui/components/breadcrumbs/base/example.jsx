// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import BreadCrumbs from '../index.react';
const { Crumb } = BreadCrumbs;
import { ButtonIcon } from '../../button-icons/base/example';
import { Trigger } from '../../menus/dropdown/example';
import { Menu } from '../../menus/dropdown/example';
import { MenuList } from '../../menus/dropdown/example';
import { MenuItem } from '../../menus/dropdown/example';

const moreIcon = (
  <ButtonIcon
    className="slds-button_icon-border-filled slds-button_icon-x-small"
    sprite="utility"
    symbol="threedots"
    assistiveText="Show More"
    aria-haspopup="true"
    title="Show More"
  />
);

let BreadcrumbMenu = props => (
  <Trigger className="slds-is-open" triggerIcon={moreIcon}>
    <Menu className="slds-dropdown_left slds-dropdown_actions">
      <MenuList>
        <MenuItem tabIndex="0">Menu Item One</MenuItem>
        <MenuItem>Menu Item Two</MenuItem>
        <MenuItem>Menu Item Three</MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export const Context = props => (
  <div className="demo-only" style={{ height: '300px' }}>
    {props.children}
  </div>
);

/* for snapshot tests */
export const BreadcrumbsWithOverflow = props => (
  <BreadCrumbs listClassNames="slds-grid_vertical-align-center">
    <Crumb hasMenu>
      <BreadcrumbMenu />
    </Crumb>
    <Crumb className="slds-text-title_caps" href="javascript:void(0);">
      Parent Entity
    </Crumb>
    <Crumb className="slds-text-title_caps" href="javascript:void(0);">
      Parent Record Name
    </Crumb>
  </BreadCrumbs>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

/* export for snapshot tests */
export default <BreadcrumbsWithOverflow />;

/* export for site examples */
export let examples = [
  {
    id: 'base',
    label: 'Base',
    element: (
      <BreadCrumbs>
        <Crumb className="slds-text-title_caps" href="javascript:void(0);">
          Parent Entity
        </Crumb>
        <Crumb className="slds-text-title_caps" href="javascript:void(0);">
          Parent Record Name
        </Crumb>
      </BreadCrumbs>
    )
  },
  {
    id: 'overflow-breadcrumbs',
    label: 'Breadcrumbs with Overflow Menu',
    element: (
      <div style={{ height: '250px' }}>
        <BreadCrumbs listClassNames="slds-grid_vertical-align-center">
          <Crumb hasMenu>
            <BreadcrumbMenu />
          </Crumb>
          <Crumb className="slds-text-title_caps" href="javascript:void(0);">
            Parent Entity
          </Crumb>
          <Crumb className="slds-text-title_caps" href="javascript:void(0);">
            Parent Record Name
          </Crumb>
        </BreadCrumbs>
      </div>
    )
  }
];
