import React from 'react';
import { useLocation } from 'react-router';
import { Box, List, useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import NavGroup from './NavGroup/NavGroup';

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const customizer = useSelector((state) => state.customizer);
  // const user = useSelector((state) => state.userSlice.user);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const dispatch = useDispatch();
  const pathDirect = pathname;
  const { shop } = useSelector((state) => state.userSlice);
  const lang = useSelector(state => state.userSlice.lang);

  // const Menuitems = [
  //   { id: handleGetRandomId(), title: t.projects[lang], href: PROJECTS },
  //   { id: handleGetRandomId(), title: t.practice[lang], href: PRACTICE },
  //   { id: handleGetRandomId(), title: t.people[lang], href: PEOPLE },
  //   { id: handleGetRandomId(), title: t.stories[lang], href: STORIES },
  //   { id: handleGetRandomId(), title: t.partners[lang], href: PARTNERS },
  //   { id: handleGetRandomId(), title: t.initiatives[lang], href: INITIATIVES },
  //   { id: handleGetRandomId(), title: t.contact[lang], href: CONTACT },
  // ];

  // const Menuitems = [
  //   {
  //     navlabel: true,
  //     subheader: 'Home',
  //   },
  //   {
  //     id: uniqueId(),
  //     title: buyPageTitle,
  //     icon: ShoppingCartOutlinedIcon,
  //     href: `/buy`,
  //     chip: 'New',
  //     chipColor: 'secondary',
  //   },
  // ];

  // const supportBtn = {
  //   id: uniqueId(),
  //   title: 'Support',
  //   icon: HelpCenterIcon,
  //   href: `https://www.google.com/`,
  //   // external: true,
  //   // chip: 'New',
  //   // chipColor: 'secondary',
  // }

  // const docBtn = {
  //   id: uniqueId(),
  //   title: 'Documentation',
  //   icon: DescriptionIcon,
  //   href: `https://www.google.com/`,
  //   // external: true,
  //   // chip: 'New',
  //   // chipColor: 'secondary',
  // }

  return (
    <Box pt={4} sx={{ px: 3, pr: 2.3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 'calc(100vh - 64px)' }}>
      <List sx={{ pt: 0, marginTop:'50px'}} className="sidebarNav">
        {Menuitems.map((item, index) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else if (item.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );

            // {/********If Sub No Menu**********/}
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );
          }
        })}
      </List>
      {/* <Stack spacing={2} mb={3}>
        <NavItem
          item={supportBtn}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={() => dispatch(toggleMobileSidebar())}
        />
        <NavItem
          item={docBtn}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={() => dispatch(toggleMobileSidebar())}
        />
      </Stack> */}
    </Box>
  );
};
export default SidebarItems;
