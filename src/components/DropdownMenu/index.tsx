import { Menu, Transition } from "@headlessui/react";
import { IoMenu } from "react-icons/io5/index.js";
import { Fragment } from "react";
import MenuItem from "./MenuItem";

interface Props {
  items: { path: string; text: string }[];
  title?: string;
}

const DropdownMenu: React.FC<Props> = ({ title, items }) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="align-middle text-xl hover:bg-slate-800 hover:text-white rounded-md p-2 ring-1 ring-slate-500">
        <IoMenu />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-800 shadow-xl focus:ring-1 focus:ring-slate-500 focus:outline-none ">
          <div className="py-1">
            {title && (
              <div className="px-3 py-2 uppercase text-white font-bold text-xs">
                {title}
              </div>
            )}
            {items.map((item) => {
              return (
                <MenuItem key={item.text} path={item.path}>
                  {item.text}
                </MenuItem>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
