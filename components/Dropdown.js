import {Menu} from '@headlessui/react';
import {useSelector} from 'react-redux';

function MyDropdown() {
  const user = useSelector(state => state.user.userInfo);
  return (
    <Menu>
      <Menu.Button>{user?.nickname}</Menu.Button>
      <Menu.Items className="absolute bg-gray-200">
        <Menu.Item>
          {({active}) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({active}) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default MyDropdown;
