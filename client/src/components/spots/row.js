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
import { Button, Link } from '@material-ui/core'
import './row.css'
import { fontWeight } from '@material-ui/system'
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
	},
	expandedPanel: {
		backgroundColor: 'red'
	}
}))

export class Row extends Component {
	state = {
		expanded: null,
		longitude: '',
		latitude: '',
		checkedA: true,
		occupied: this.props.element.occupied,
		object: []
	}

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		})
	}

	handleChange2 = name => event => {
		this.setState({ [name]: event.target.checked })
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
		// console.log('NADDDDA')
		// console.log(this.state.occupied)

		const { classes } = this.props
		const { expanded } = this.state
		// console.log('============= ' + this.props.element._id)
		if (this.state.occupied == false) {
			return (
				<div className='outerDiv'>
					<ExpansionPanel
						expanded={expanded === 'panel'}
						onChange={this.handleChange('panel')}
					>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1bh-content'
							id='panelbh-header'
						>
							<Typography className={classes.heading} style={styleRowReserved}>
								{' '}
								Spot
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								occupied:{' '}
								{'( ' +
									this.state.occupied +
									' )' +
									'       ' +
									'\n' +
									this.props.element._id}
							</Typography>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br>

							<Button
								onClick={() =>
									this.props.updateOccuipied(
										this.props.element._id,
										!this.props.element.occupied
									)
								}
							>
								Reserve slot
							</Button>

							<Button onClick={event => (window.location.href = '/spots/maps')}>
								{' '}
								Directions
							</Button>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
			)
		} else if (this.state.occupied == true) {
			return (
				<div className='outerDiv'>
					<ExpansionPanel
						expanded={expanded === 'panel'}
						onChange={this.handleChange('panel')}
					>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1bh-content'
							id='panelbh-header'
						>
							<Typography
								className={classes.heading}
								style={styleRowUnReserved}
							>
								Spot
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								occupied:{' '}
								{'( ' +
									this.state.occupied +
									' )' +
									'       ' +
									'\n' +
									this.props.element._id}
							</Typography>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br>

							<Button
								onClick={() =>
									this.props.updateOccuipied(
										this.props.element._id,
										!this.props.element.occupied
									)
								}
							>
								Unreserve slot
							</Button>

							<Button onClick={event => (window.location.href = '/spots/maps')}>
								{' '}
								Directions
							</Button>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
			)
		}
	}
}

export default withStyles(useStyles)(Row)
