import ArchiveIcon from '@material-ui/icons/Archive';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff';
import PrintIcon from '@material-ui/icons/Print';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import HelpIcon from '@material-ui/icons/Help';

type Props = {
  icon?: string;
};

const ActionIcon = (props: Props): JSX.Element => {
  const { icon } = props;
  switch (icon) {
    case 'ArchiveIcon':
      return <ArchiveIcon />;
    case 'EditIcon':
      return <EditIcon />;
    case 'DeleteIcon':
      return <DeleteIcon />;
    case 'VisibilityIcon':
      return <VisibilityIcon />;
    case 'SpeakerNotesIcon':
      return <SpeakerNotesIcon />;
    case 'PostAddIcon':
      return <PostAddIcon />;
    case 'SpeakerNotesOffIcon':
      return <SpeakerNotesOffIcon />;
    case 'PrintIcon':
      return <PrintIcon />;
    case 'LockIcon':
      return <LockIcon />;
    case 'LockOpenIcon':
      return <LockOpenIcon />;
    default:
      return <HelpIcon />;
  }
};

export default ActionIcon;
