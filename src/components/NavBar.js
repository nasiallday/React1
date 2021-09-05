import React from 'react'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        
    },
  
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
       
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                
                <Typography variant="h6" className={classes.menuItem}>
                   Home
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    LinkedIn
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Plants
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Running Routes 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Me 
                </Typography>
            </Toolbar>
    )
}

export default NavBar