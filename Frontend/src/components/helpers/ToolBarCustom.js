import React from 'react'
import Search from './Search'
import { 
    makeStyles,
    IconButton } from '@material-ui/core/';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import buttondelete from '../../assets/icons/menos.svg';
import buttonadd from '../../assets/icons/mas.svg';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(3)
    },
    searchContainer: {
        marginRight: theme.spacing(3),
    },
    buttonsContainer: {
        marginLeft: theme.spacing(3),
    },
    imgicon: {
        width: theme.spacing(3),
        [theme.breakpoints.up(2800)]:{
            width: theme.spacing(5),
        },
    },
    buttons: {
        margin: theme.spacing(0.8)
    },
}));
const ToolBarCustom = ({ handleDeleting, handleModalopen, handleChange, ChangeStatusButtons }) => {

    const classes = useStyles();

    return (
        <div className={ classes.root }>
            {
                (ChangeStatusButtons)
                ?   <div className={ classes.buttonsContainer }>
                    <IconButton
                        edge="start"
                        onClick={ handleModalopen }
                        className={ classes.buttons }
                        color="inherit" >
                        <img src={ buttonadd }  className={ classes.imgicon } />
                    </IconButton>
                    <IconButton
                        edge="start"
                        onClick={ handleDeleting }
                        className={ classes.buttons }
                        color="inherit" >
                        <img src={ buttondelete }  className={ classes.imgicon } />
                    </IconButton>
                    </div>
                :null
            }
            <div className={ classes.searchContainer }>
                <Search handleChange={ handleChange } />
            </div>
        </div>
    )
}

export default ToolBarCustom;