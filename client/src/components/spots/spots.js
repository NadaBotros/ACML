import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import axios from 'axios'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Row from './row.js'
import Row2 from './row2.js'
import background from '../../components/pictures/background.jpg'
import './spots.css'
import { display } from '@material-ui/system'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const count = 1
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}))

export class spots extends Component {
  state = {
    expanded: null,
    longitude: '',
    latitude: '',
    occupied: true,
    checkedA: false,
    object: [],
    emptySpots: [],
    allSpots: [],
    allAndEmptySpots: [],
    update: false,
    id: ''
  }

  componentDidMount() {
    axios
      .post('/api/spots/lotAllAndEmptySpots', {
        parkingLot: localStorage.getItem('parking')
      })
      .then(res => {
        console.log('*** ' + res.data.emptySpots)

        this.setState({
          emptySpots: res.data.emptySpots,
          allSpots: res.data.allSpots
          //   allAndEmptySpots: res.data
        })
      })
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    })
  }

  handleChange2 = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked })
  }

  updateOccuipied = (id, occupied) => {
    axios
      .post('/api/spots/updateSpot', {
        id: id,
        occupied: occupied
      })
      .then(async res => {
        const update = await axios.post('/api/spots/lotAllAndEmptySpots', {
          parkingLot: localStorage.getItem('parking')
        })
        const s = update.data.allSpots
        const ss = update.data.emptySpots

        this.setState({
          allSpots: [],
          emptySpots: []
        })
        this.setState({
          allSpots: s,
          emptySpots: ss,
          update: true
        })
      })
  }

  render() {
    const { classes } = this.props
    const { expanded } = this.state
    console.log('All : ' + this.state.allSpots)
    console.log('Empty : ' + this.state.emptySpots)

    if (this.state.checkedA == true) {
      console.log('Checked True')
      return (
        <div className="hero-content">
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange2('checkedA')}
                  value="checkedA"
                  color="primary"
                />
              }
              label="Empty spaces"
            />
            <Button className="btnstyle">
              {' '}
              <Link to="/">Home</Link>
            </Button>
          </FormGroup>
          <div className={classes.root}>
            {console.log('')}
            {this.state.emptySpots.map(element => (
              <Row2
                element={element}
                id={element._id}
                updateOccuipied={this.updateOccuipied}
                componentDidMount={this.componentDidMount}
                checkedA={this.state.checkedA}
              ></Row2>
            ))}
          </div>
        </div>
      )
    } else if (this.state.checkedA == false) {
      console.log('Checked Flase')

      return (
        <div className="hero-content">
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange2('checkedA')}
                  value="checkedA"
                  color="primary"
                />
              }
              label="Empty spaces"
            />
            <Button className="btnstyle">
              {' '}
              <Link to="/">Home</Link>
            </Button>
          </FormGroup>
          <div className={classes.root}>
            {this.state.allSpots.map(element => (
              <Row2
                element={element}
                id={element._id}
                updateOccuipied={this.updateOccuipied}
                componentDidMount={this.componentDidMount}
                checkedA={this.state.checkedA}
              ></Row2>
            ))}
          </div>
        </div>
      )
    }
  }
}

export default withStyles(useStyles)(spots)
