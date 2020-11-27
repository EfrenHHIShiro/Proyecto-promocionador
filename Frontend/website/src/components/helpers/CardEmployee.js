import React from 'react';
import { 
    Button,
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    IconButton, 
    makeStyles, 
    Typography} from '@material-ui/core';

import VisibilityIcon from '@material-ui/icons/Visibility';
import DescriptionIcon from '@material-ui/icons/Description';
import buttondelete from '../../assets/icons/menos.svg';
import { useDispatch } from 'react-redux';
import { Deleting } from '../../actions/persistenceActions';
import { useHistory } from 'react-router-dom';
import GoogleIcon from '../../assets/icons/antros.jpg';

const useStyles = makeStyles((theme) => ({
    cardContainer:{
        position: 'relative', 
        marginLeft:theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
    root: {
        backgroundColor: '#0367A6',
        color: 'white',
        [theme.breakpoints.up('md')]:{
            height: '20%',
            width: '20%',
        },
        [theme.breakpoints.up('lg')]:{
            height: '20%',
            width: '20%',
        },
        [theme.breakpoints.up('xl')]:{
            height: '20%',
            width:'20%',
        },
    },
    buttonDelete:{
        position: 'absolute',
        top: -8,
        right:-8,
        [theme.breakpoints.up(2800)]:{
            top: -25,
            right:-25,
        },
    },
    imgDelete: {
        width: theme.spacing(3),
        [theme.breakpoints.up(2800)]:{
            width: theme.spacing(8),
        },
    },
    imgCardMedia:{
        height: 200,
        objectFit: 'fill',
        [theme.breakpoints.up(2800)]:{
            height: 350,
        },
    },
    textContainer:{
        height: 124,
        [theme.breakpoints.up(2800)]:{
            height: 217,
        },
    },
    buttonContainer: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        justifyContent: 'space-around',
        [theme.breakpoints.up(2800)]:{
            marginBottom: theme.spacing(2),
        },
    },
    buttons: {
        backgroundColor: 'white', 
        color: '#0367A6',
        height: 30,
        width: 70,
        [theme.breakpoints.up('md')]:{
            height: 20,
            width: 46.6666,
        },
        [theme.breakpoints.up('lg')]:{
            height: 20,
            width: 46.66666,
        },
        [theme.breakpoints.up('xl')]:{
            height: 30,
            width: 70,
        },
        [theme.breakpoints.up(2800)]:{
            height: 50,
            width: 116.66666,
        },
    },
    name:{
        [theme.breakpoints.down('sm')]:{
            fontSize: '2.2vw',
        },
        [theme.breakpoints.up('md')]:{
            fontSize: '1.2vw',
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: '.9vw',
        },
        [theme.breakpoints.up('xl')]:{
            fontSize: '.8vw',
        },
        [theme.breakpoints.up(2800)]:{
            fontSize: '1vw',
        },
    }
}));

const CardEmployee = ({ item, isDelete }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = ( id ) => (e) => {
        e.preventDefault();
        dispatch( Deleting( `client/delete/${id}`, id ) )
    }

    const handleViewDetails = ( id ) => (e) => {
        e.preventDefault();
        history.push(`/Developer/Detail/${id}`)
    }

    return (
        <div className={ classes.cardContainer }>
            
            
            <Card className={ classes.root} >
          
                <CardMedia
                    component="img"
                    className={ classes.imgCardMedia }
                    alt="Image of Employee"
                    image={GoogleIcon}
                    title="el rey" />
                <CardContent className={ classes.textContainer }>
                    <Typography className={classes.name}>
                    Roman Vladimir Reyes Uicab
                    </Typography>
                    <Typography className={classes.name}>
                        Role: Progrmador
                    </Typography>
                    <Typography className={classes.name}>
                       
                    </Typography>
                </CardContent>
                <CardActions className={ classes.buttonContainer } >
                    <Button
                        variant="contained"
                        className={ classes.buttons } 
                        >
                        <VisibilityIcon />
                    </Button>
                    <Button
                        variant="contained"
                        className={ classes.buttons } >
                        <DescriptionIcon />
                    </Button>
                </CardActions>
                </Card>
        </div>
    );
}

export default CardEmployee;