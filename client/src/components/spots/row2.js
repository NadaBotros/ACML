import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'
import './row.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import maps from '../maps/maps.js'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))

export class Row extends Component {
  state = {
    occupied: this.props.element.occupied,
    checkedA: this.props.checkedA,
    longitude: this.props.element.longitude,
    latitude: this.props.element.latitude
  }

  render() {
    const styleRowUnReserved = {
      color: 'red',
      fontWeight: 'bold'
    }
    const styleRowReserved = {
      color: 'green',
      fontWeight: 'bold'
    }
    const styleCard = {
      background: 'white'
    }

    const { classes } = this.props
    const { expanded } = this.state
    if (this.state.occupied == false) {
      return (
        <div className="outerDiv">
          <Paper className={classes.root} style={styleCard}>
            <Typography variant="h5" component="h3" style={styleRowReserved}>
              {this.props.element.name}
            </Typography>
            <Typography component="p">
              {/* Spot occupied:{' '}
                {'( ' +
                  this.state.occupied +
                  ' )' +
                  '       ' +
                  '\n' +  
                  this.props.element._id} */}
            </Typography>
            <Button
              onClick={() =>
                this.props.updateOccuipied(
                  this.props.element._id,
                  !this.props.element.occupied
                )
              }
            >
              {' '}
              Reserve slot
            </Button>
            {/* <Button
              onClick={event => (window.location.href = '/spots/maps')}
            ></Button> */}
            <Link
              to={
                '/spots/maps/' +
                this.state.longitude +
                '/' +
                this.state.latitude
              }
              class="button"
              style={{ color: 'black ', marginLeft: '3mm' }}
            >
              Directions
            </Link>
          </Paper>
          <br></br>
        </div>
      )
    } else if (this.state.occupied == true) {
      return (
        <div className="outerDiv">
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3" style={styleRowUnReserved}>
              {this.props.element.name}
            </Typography>
            <Typography component="p">
              {/* Spot occupied:{' '}
                {'( ' +
                  this.state.occupied +
                  ' )' +
                  '       ' +
                  '\n' +
                  this.props.element._id} */}
            </Typography>
            <Button
              onClick={() =>
                this.props.updateOccuipied(
                  this.props.element._id,
                  !this.props.element.occupied
                )
              }
            >
              Unrserve slot
            </Button>

            {/* <Button
              onClick={event => (window.location.href = '/spots/maps')}
            ></Button> */}
            <Link
              to={
                '/spots/maps/' +
                this.state.longitude +
                '/' +
                this.state.latitude
              }
              class="button"
              style={{ color: 'black ', marginLeft: '3mm' }}
            >
              Directions
            </Link>
          </Paper>
          <br></br>
        </div>
      )
    }
  }
}

export default withStyles(useStyles)(Row)
