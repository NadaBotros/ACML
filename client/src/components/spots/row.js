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

export class Row extends Component {
	state = {
		expanded: null,
		longitude: '',
		latitude: '',
		checkedA: true,
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
		const { classes } = this.props
		const { expanded } = this.state

		return (
			<div>
				<ExpansionPanel
					expanded={expanded === 'panel'}
					onChange={this.handleChange('panel')}
				>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panelbh-header'
					>
						<Typography className={classes.heading}>Spot</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>Occupied:{this.state.object.occupied}</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		)
	}
}

export default withStyles(useStyles)(Row)
