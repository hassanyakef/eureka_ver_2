import React, { Fragment, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import UserDetailedHeaderInfo from '../../user/UserDetailed/UserDetailedHeaderInfo';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Loading from '../../../app/common/util/Loading';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(12.5),
      height: theme.spacing(12.5),
    }
  }
}));

const PostDetailedSidebarRight = ({ theme, authorId }) => {
  const classes = useStyles(theme);

  const authorProfileQuery = useMemo(() => ({
    collection: 'users',
    doc: authorId,
    storeAs: 'authorProfile'
  }), [authorId]);

  useFirestoreConnect(authorProfileQuery);

  const user = useSelector((state) => (state.firestore.data.authorProfile));

  return (
    <Fragment>
      <Loading loading={!user}/>
      {
        user && <Grid container className={classes.root} spacing={2}>
          <Grid item>
            <Avatar component={RouterLink}
                    to={`/users/${authorId}`}
                    className={classes.profile} alt={user.displayName}
                    src={user.avatarUrl}/>
          </Grid>
          <Grid item md={12}>
            <Link variant='h4' color="secondary" component={RouterLink}
                  to={`/users/${authorId}`}>{user.displayName}</Link>
            <Typography variant="h6" gutterBottom={true}>
              {user.profession} at {user.company}
            </Typography>
            <Typography variant="body1" gutterBottom={true}>
              {user.bio}
            </Typography>
            <UserDetailedHeaderInfo location={user.location} website={user.website} createdAt={user.createdAt}/>
            <Box my={2}>
              <Button size='large' fullWidth={true} variant='contained' color='secondary'>+
                Follow</Button>
            </Box>
          </Grid>
        </Grid>
      }
    </Fragment>
  );
};

export default PostDetailedSidebarRight;