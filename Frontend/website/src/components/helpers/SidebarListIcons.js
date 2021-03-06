import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import BookIcon from '@material-ui/icons/Book';
import GroupIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';

export const SidebarListIcons = ({useStyles}) => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(null);
    
    const [open, setOpen] = React.useState(false);
    
    const handleClick = () => {
        setOpen(!open);
    };
    const handleListItemClick = (event, index) => {
        if(index === 4) handleClick();
        
        setSelectedIndex(index);
    };

    return (
        <div>
            <Link to="/Negocios" className={classes.textLinks} >
                <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)} >
                    <ListItemIcon>
                        <PersonIcon style={ {color: 'white'} } />
                    </ListItemIcon>
                    
                    <ListItemText primary="Negocios" />
                </ListItem>
            </Link>
            
            <Link to="/Teams" className={classes.textLinks} >
                <ListItem button selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)} >
                    <ListItemIcon>
                        <GroupWorkIcon style={ {color: 'white'} } />
                    </ListItemIcon>
                    <ListItemText primary="Usuarios" />
                </ListItem>
            </Link>

            <Link to="/Empleados" className={classes.textLinks} >
                <ListItem button  selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)} >
                    <ListItemIcon>
                        <GroupIcon style={ {color: 'white'} } />
                    </ListItemIcon>
                    <ListItemText primary="Empleados" />
                </ListItem>
            </Link>

            {/* <Link to="/Requests" className={classes.textLinks} >
                <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)} >
                    <ListItemIcon>
                        <BookIcon style={ {color: 'white'} } />
                    </ListItemIcon>
                    <ListItemText primary="Requests" />
                </ListItem>
            </Link> */}

            <ListItem button  selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)} >
                <ListItemIcon >
                    <LibraryBooksIcon style={ {color: 'white'} } />
                </ListItemIcon>
                <ListItemText primary="Catalogs" />
            </ListItem>
            <Collapse className={classes.contentNested} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/helpers/CardRegister" className={classes.textLinks}>
                        <ListItem button selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)} className={classes.nested}>
                            <ListItemIcon>
                                <LibraryBooksIcon style={ {color: 'white'} } />
                            </ListItemIcon>
                            <ListItemText primary="Registro" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        </div>
    )
}
