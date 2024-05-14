import { fireEvent, screen } from '@testing-library/dom';
import { renderWithTheme } from '../utils/test-utils';
import { AvatarProps, AvatarType, IonAvatar } from './avatar';
import { SizeType } from '@ion/core/types/size';

const photoUrl =
  'https://64.media.tumblr.com/40e2174ab5e68b1eabbc3dfc78607cef/c1effc67d5c3a1fd-20/s540x810/9d6ce72fcddf97841e7410a0652dd9d5f018b35d.pnj';

const onErrorImg =
  'https://images.unsplash.com/photo-1714659046842-7dcf4ab2a58f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const avatarSizes: SizeType[] = ['lg', 'md', 'sm', 'xs'];

const photoAvatar: AvatarProps = {
  type: AvatarType.photo,
  image: photoUrl,
};

const sut = (props: AvatarProps) => renderWithTheme(<IonAvatar {...props} />);

describe('Avatar', () => {
  describe('Default', () => {
    it('should render avatar component', () => {
      sut({});
      expect(screen.getByTestId('ion-avatar')).toBeVisible();
    });
    it('should render the initials avatar as default', () => {
      sut({});
      expect(screen.getByTestId('ion-avatar-initials')).toBeVisible();
    });
    it.each(avatarSizes)(
      'should render avatar with %s size variation',
      (size) => {
        sut({
          size,
        });
        expect(screen.getByTestId('ion-avatar')).toMatchSnapshot();
      }
    );
  });

  describe('Initials', () => {
    it('should render with -- when no value is informed', () => {
      sut({});
      expect(screen.getByText('--')).toBeVisible();
    });
    it('should render the initials of a provided name', () => {
      sut({ value: 'ana carolina' });
      expect(screen.getByText('AC')).toBeVisible();
    });
  });

  describe('Icon', () => {
    it('should render a icon', () => {
      sut({ type: AvatarType.icon });
      expect(screen.getByTestId('ion-icon-user')).toBeVisible();
    });
  });

  describe('Photo', () => {
    it('should render the image', () => {
      sut(photoAvatar);
      expect(screen.getByTestId('ion-avatar-photo')).toBeVisible();
    });

    it('should change the image to the specified default on error', () => {
      sut({
        ...photoAvatar,
        image: 'wrongImageUrl',
        onErrorImg,
      });
      const imageElement = screen.getByTestId('ion-avatar-photo');
      fireEvent.error(imageElement);

      expect(imageElement).toHaveAttribute('src', onErrorImg);
    });
  });
});
