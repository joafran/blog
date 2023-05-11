import { Menu } from "@headlessui/react";

const MenuItem: React.FC<{ path: string; children: React.ReactNode }> = ({
  path,
  children,
}) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={path}
          className={`${
            active ? "bg-neutral-50 dark:bg-neutral-400 text-zinc-800" : ""
          } block text-white px-4 py-2 font-light text-sm m-0`}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
