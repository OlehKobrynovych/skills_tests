import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { handleGetRandomId } from '../../../../helpers/Utils';

const Menuitems = [
  {
    id: handleGetRandomId(),
    title: 'Buy Naw',
    icon: PeopleOutlineIcon,
    href: `/buy`,
    // chip: 'New',
    // chipColor: 'secondary',
  },
  {
    id: handleGetRandomId(),
    title: 'Application',
    icon: DashboardCustomizeOutlinedIcon,
    href: `/application`,
    // chip: 'New',
    // chipColor: 'secondary',
  },
  {
    id: handleGetRandomId(),
    title: 'Ingredients',
    icon: MarkUnreadChatAltOutlinedIcon,
    href: `/ingredients`,
    // chip: 'New',
    // chipColor: 'secondary',
  },
  {
    id: handleGetRandomId(),
    title: 'Return',
    icon: StorefrontOutlinedIcon,
    href: `/return`,
    // chip: 'New',
    // chipColor: 'secondary',
  },
  {
    id: handleGetRandomId(),
    title: 'Contact',
    icon: AssessmentOutlinedIcon,
    href: `/contact`,
    // chip: 'New',
    // chipColor: 'secondary',
  },
];
export default Menuitems;
