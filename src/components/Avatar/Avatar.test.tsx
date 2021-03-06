/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Text from '../Text';
import Avatar, { AvatarProps, AvatarSize, BorderType } from '.';

describe('<Avatar />', () => {
  let component: ShallowWrapper<AvatarProps>;

  describe('with image url', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with too many characters', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="First Last" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with badge content', () => {
    beforeEach(() => {
      component = shallow(
        <Avatar name="NAME" imageUrl="test.jpg" size={AvatarSize.XSMALL} badgeContent={<Text>badge</Text>} />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with soft border type', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" borderType={BorderType.SOFT} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with size', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" size={AvatarSize.XLARGE} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('accessible text', () => {
    describe('without badge description', () => {
      beforeEach(() => {
        component = shallow(<Avatar name="NAME" imageUrl="test.jpg" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with badge description', () => {
      beforeEach(() => {
        component = shallow(<Avatar name="NAME" imageUrl="test.jpg" badgeDescription="BADGE" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });
});
